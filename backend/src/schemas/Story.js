const mongoose = require("mongoose");

const Story = mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  stories: [
    {
      story: String,
      tasks: [
        {
          id: Number,
          taskName: String,
          taskDueDate: Date,
          taskPriority: String,
          taskDescription: String,
          bonusPoints: Number,
          completed: Boolean,
          due: Boolean,
        },
      ],
    },
  ],
});

module.exports = mongoose.model("userStory", Story);
