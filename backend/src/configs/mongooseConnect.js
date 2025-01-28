const mongoose = require("mongoose");

const mongooseConnect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APPNAME}`
  );
};

module.exports = mongooseConnect;
