const express = require("express");
const {
  createStory,
  getStories,
} = require("../controllers/userStoryController");
const checkAuthentication = require("../middlewares/checkAuthentication");

const router = express.Router();

router.post("/createStory", checkAuthentication, createStory);

router.get("/getStories", checkAuthentication, getStories);

module.exports = router;
