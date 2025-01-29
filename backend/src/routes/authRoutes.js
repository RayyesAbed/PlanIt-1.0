const express = require("express");
const router = express.Router();

const { registerUserRequest } = require("../controllers/authController");

router.post("/register_request", registerUserRequest);

module.exports = router;
