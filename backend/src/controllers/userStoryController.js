const googleGemini = require("../configs/googleGeminiConnect");
const storyPromptTemplate = require("../aiPrompts/storyPromptTemplate");
const Story = require("../schemas/Story");
const User = require("../schemas/User");
const jwt = require("jsonwebtoken");

const createStory = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.sendStatus(401);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded || !decoded.userId) return res.sendStatus(403);

  const user = await User.findById(decoded.userId);

  if (!user) return res.sendStatus(404);

  const { storyPrompt } = req.body;

  if (!storyPrompt)
    return res.status(400).json({ message: "Story prompt is required" });

  const response = await googleGemini.models.generateContent({
    model: "gemini-2.5-flash-preview-04-17", // to be replaced with Gemini Pro for better story generation
    contents: storyPromptTemplate(user.name, storyPrompt),
  });

  const cleanedOutput = response.text
    .replace(/```json\s*/, "") // Remove ```json
    .replace(/```/, "") // Remove closing ```
    .trim();

  let parsed;

  try {
    parsed = JSON.parse(cleanedOutput);

    if (parsed.error) {
      return res.status(400).json({ error: parsed.error });
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return res.status(500).json({ message: "Failed to parse AI response." });
  }

  let userStory = await Story.findOne({ userID: decoded.userId });

  if (!userStory) {
    userStory = await Story.create({ userID: decoded.userId });
  }

  userStory.stories.push({
    storyTitle: parsed.storyTitle,
    storyText: parsed.storyText,
    tasks: parsed.tasks,
  });

  await userStory.save();

  return res.status(201).json({
    message: "Generated a story successfully",
    userStories: userStory.stories,
  });
};

const getStories = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.sendStatus(401);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded || !decoded.userId) return res.sendStatus(403);

  const userStories = await Story.findOne({ userID: decoded.userId });

  if (!userStories) {
    return res.status(404).json({ message: "No stories found" });
  }

  return res.status(200).json({
    message: "Fetched stories successfully",
    userStories: userStories.stories,
  });
};

module.exports = {
  createStory,
  getStories,
};
