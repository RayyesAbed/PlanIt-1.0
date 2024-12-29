// require all modules here
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "../frontend/.env.development" });

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGODB_APPNAME}`
  )
  .then(() => {
    console.log("CONNECTED");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
