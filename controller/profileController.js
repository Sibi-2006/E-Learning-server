import User from "../module/user.js";

export const updateProgress = async (req, res) => {
  const { userId, course } = req.params;
  const { completedLessons, totalLessons } = req.body;

  if (!userId || !course) {
    return res.status(400).json({ message: "User ID and course name are required" });
  }

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const percent =
      totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

    await User.updateOne(
      { _id: userId },
      {
        $set: {
          [`progress.${course}.completedLessons`]: completedLessons,
          [`progress.${course}.totalLessons`]: totalLessons,
          [`progress.${course}.percent`]: percent,
          [`progress.${course}.lastUpdated`]: new Date(),
        },
      }
    );

    res.status(200).json({ message: `${course} progress updated successfully` });
  } catch (err) {
    console.error("Error updating progress:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
