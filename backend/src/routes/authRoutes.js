const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const {
  registerUserRequest,
  verifyEmail,
  loginUser,
} = require("../controllers/authController");

router.post(
  "/register_request",
  check("email").normalizeEmail({ all_lowercase: true }),
  registerUserRequest
);
router.post("/verify-email", verifyEmail);
router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .normalizeEmail({ all_lowercase: true })
      .withMessage("Invalid email format"),
    check("password").notEmpty().withMessage("Password is required"),
  ],
  loginUser
);

module.exports = router;
