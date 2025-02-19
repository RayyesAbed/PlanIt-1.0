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

const addTask = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.sendStatus(401);

    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.sendStatus(403);
    }

    const taskData = req.body;

    const userTasks = await Task.findOne({ userID: decoded.userId });

    userTasks.list.push(taskData);

    await userTasks.save();

    return res.status(201).json({ message: "Task added successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const editTask = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.sendStatus(401);

    let decoded;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.sendStatus(403);
    }

    const updatedTaskData = req.body;

    const userTasks = await Task.findOne({ userID: decoded.userId });

    const taskIndex = userTasks.list.findIndex(
      (task) => task.id === updatedTaskData.id
    );

    if (taskIndex === -1)
      return res.status(404).json({ message: "Task not found" });

    userTasks.list[taskIndex] = updatedTaskData;

    await userTasks.save();

    return res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getTasks,
  addTask,
  editTask,
};
