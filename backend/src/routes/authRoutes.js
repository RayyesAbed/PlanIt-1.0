const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const {
  registerUserRequest,
  verifyEmail,
  loginUser,
  resetPasswordRequest,
  resetPassword,
  logoutUser,
  verifyResetPasswordToken,
} = require("../controllers/authController");
const checkAuthentication = require("../middlewares/checkAuthentication");

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

router.post("/checkAuth", checkAuthentication, (req, res) => {
  return res.sendStatus(200);
});

router.post(
  "/reset_password_request",
  check("email").normalizeEmail({ all_lowercase: true }),
  resetPasswordRequest
);

router.patch("/reset_password", resetPassword);

router.post("/verify_reset_password_token", verifyResetPasswordToken);

router.post("/logout", logoutUser);

module.exports = router;
