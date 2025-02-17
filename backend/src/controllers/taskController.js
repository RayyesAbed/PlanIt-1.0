const jwt = require("jsonwebtoken");
const Task = require("../schemas/Task");

const getTasks = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.sendStatus(401);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.userId) return res.sendStatus(403);

    const userTasks = await Task.findOne({ userID: decoded.userId });

    return res.status(200).json({ list: userTasks.list });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getTasks,
};
