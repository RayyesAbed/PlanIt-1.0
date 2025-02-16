const mongoose = require("mongoose");

const UserTaskSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  list: [
    {
      taskName: String,
      taskDueDate: Date,
      taskPriority: String,
      taskDescription: String,
    },
  ],
});

module.exports = mongoose.model("UserTask", UserTaskSchema);
