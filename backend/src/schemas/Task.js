const mongoose = require("mongoose");

const UserTaskSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  list: [
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
});

module.exports = mongoose.model("UserTask", UserTaskSchema);
