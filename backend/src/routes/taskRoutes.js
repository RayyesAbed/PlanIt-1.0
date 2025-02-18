const express = require("express");
const { getTasks, addTask } = require("../controllers/taskController");

const router = express.Router();

router.get("/list", getTasks);

router.post("/add_task", addTask);

module.exports = router;
