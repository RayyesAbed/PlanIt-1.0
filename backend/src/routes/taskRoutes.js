const express = require("express");
const {
  getTasks,
  addTask,
  editTask,
  deleteTask,
  completeTask,
} = require("../controllers/taskController");
const checkAuthentication = require("../middlewares/checkAuthentication");

const router = express.Router();

router.get("/list", checkAuthentication, getTasks);

router.post("/add_task", checkAuthentication, addTask);

router.put("/edit_task", checkAuthentication, editTask);

router.delete("/delete_task", checkAuthentication, deleteTask);

router.patch("/complete_task", checkAuthentication, completeTask);

module.exports = router;
