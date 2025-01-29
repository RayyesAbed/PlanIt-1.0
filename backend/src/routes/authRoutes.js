const express = require("express");
const router = express.Router();

const {
  registerUserRequest,
  verifyEmail,
} = require("../controllers/authController");

router.post("/register_request", registerUserRequest);
router.get("/verify-email", verifyEmail);

module.exports = router;
