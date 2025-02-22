const express = require("express");
const {
  getTasks,
  addTask,
  editTask,
  deleteTask,
  completeTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/list", getTasks);

router.post("/add_task", addTask);

router.put("/edit_task", editTask);

router.delete("/delete_task", deleteTask);

router.patch("/complete_task", completeTask);

module.exports = router;
