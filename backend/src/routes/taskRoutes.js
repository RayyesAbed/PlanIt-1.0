const express = require("express");
const {
  getTasks,
  addTask,
  editTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/list", getTasks);

router.post("/add_task", addTask);

router.put("/edit_task", editTask);

module.exports = router;
