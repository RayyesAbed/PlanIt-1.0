// require all modules here
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/authRoutes");

dotenv.config({ path: "../frontend/.env.development" });

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

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
