const jwt = require("jsonwebtoken");
const User = require("../schemas/User");
const Task = require("../schemas/Task");

const getTasks = async (req, res) => {
  const currentDate = new Date();

  try {
    const token = req.cookies.token;

    if (!token) return res.sendStatus(401);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.userId) return res.sendStatus(403);

    const userTasks = await Task.findOne({ userID: decoded.userId });

    const user = await User.findById(decoded.userId);

    const validUserTasks = userTasks.list.map((listItem) => {
      if (
        listItem.taskDueDate < currentDate &&
        listItem.completed === false &&
        listItem.due === false
      ) {
        listItem.due = true;
        user.points -= listItem.bonusPoints;
      }

      return listItem;
    });

    await userTasks.save();

    await user.save();

    return res.status(200).json({ list: validUserTasks });
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

    taskData.bonusPoints =
      taskData.taskPriority === "ASAP"
        ? 35
        : taskData.taskPriority === "Focus"
        ? 20
        : 10;

    taskData.due = false;
    taskData.completed = false;

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

    updatedTaskData.bonusPoints =
      updatedTaskData.taskPriority === "ASAP"
        ? 35
        : updatedTaskData.taskPriority === "Focus"
        ? 20
        : 10;

    updatedTaskData.due = false;

    userTasks.list[taskIndex] = updatedTaskData;

    await userTasks.save();

    return res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  const token = req.cookies.token;
  const taskId = req.body.id;

  if (!token) return res.sendStatus(401);

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.sendStatus(403);
  }

  if (!taskId) return res.status(400).json({ message: "Task ID not provided" });

  const userTasks = await Task.findOne({ userID: decoded.userId });

  const taskIndex = userTasks.list.findIndex((task) => task.id === taskId);

  if (taskIndex === -1)
    return res.status(404).json({ message: "Task not found" });

  userTasks.list.splice(taskIndex, 1);

  await userTasks.save();

  return res.status(200).json({ message: "Task deleted successfully" });
};

const completeTask = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.sendStatus(401);

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.sendStatus(403);
  }

  const taskId = req.body.id;

  if (!taskId) return res.status(400).json({ message: "Task ID not provided" });

  const userTasks = await Task.findOne({ userID: decoded.userId });

  const taskIndex = userTasks.list.findIndex((task) => task.id === taskId);

  if (taskIndex === -1)
    return res.status(404).json({ message: "Task not found" });

  userTasks.list[taskIndex].completed = true;

  const user = await User.findById(decoded.userId);

  user.points += userTasks.list[taskIndex].bonusPoints;

  await userTasks.save();

  await user.save();

  return res.status(200).json({
    message: "Task completed successfully",
    bonusAdded: userTasks.list[taskIndex].bonusPoints,
  });
};

module.exports = {
  getTasks,
  addTask,
  editTask,
  deleteTask,
  completeTask,
};
