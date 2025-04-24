const express = require("express");
const { createStory } = require("../controllers/userStoryController");

const router = express.Router();

router.post("/createStory", createStory);

module.exports = router;
