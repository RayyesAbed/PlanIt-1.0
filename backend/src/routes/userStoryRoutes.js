const express = require("express");
const {
  createStory,
  getStories,
} = require("../controllers/userStoryController");

const router = express.Router();

router.post("/createStory", createStory);

router.get("/getStories", getStories);

module.exports = router;
