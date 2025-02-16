const express = require("express");
const { getTasks } = require("../controllers/taskController");

const router = express.Router();

router.get("/list", getTasks);

module.exports = router;
