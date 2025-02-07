// require all modules here
const dotenv = require("dotenv");

dotenv.config({ path: "../frontend/.env.development" });

const express = require("express");
const cors = require("cors");
const mongooseConnect = require("./src/configs/mongooseConnect");
const authRoutes = require("./src/routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ origin: process.env.VITE_FRONTEND_URL, credentials: true }));

app.use(express.json());

app.use(cookieParser());

app.use("/auth", authRoutes);

mongooseConnect()
  .then(() => {
    console.log("CONNECTED");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
