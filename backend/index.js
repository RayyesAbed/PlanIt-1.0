// require all modules here
const express = require("express");
const cors = require("cors");
const mongooseConnect = require("./src/configs/mongooseConnect");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/authRoutes");

dotenv.config({ path: "../frontend/.env.development" });

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

mongooseConnect()
  .then(() => {
    console.log("CONNECTED");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
