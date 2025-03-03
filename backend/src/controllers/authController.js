const isPasswordValid = require("../utils/isPasswordValid");
const isThereSpecialCharacters = require("../utils/isThereSpecialCharacters");
const isValidEmail = require("../utils/isValidEmail");
const { validationResult } = require("express-validator");
const sendEmail = require("../services/sendEmail");
const User = require("../schemas/User");
const Task = require("../schemas/Task");
const PendingUser = require("../schemas/PendingUser");
const verifyToken = require("../services/verifyToken");
const hashPassword = require("../services/hashPassword");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const registerUserRequest = async (req, res) => {
  const { name, email, password } = req.body;

  // check if any value of (name, email, password) is empty
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // check for special characters in name
  if (isThereSpecialCharacters(name)) {
    return res.status(400).json({
      message: "Special characters are not allowed in name!",
    });
  }

  // check if email is valid
  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Invalid email!" });
  }

  // check if password is at least 8 characters long and is secure enough
  if (!isPasswordValid(password)) {
    return res.status(400).json({ message: "Password is not secure enough!" });
  }

  let user = await User.findOne({ email: email });
  if (user) {
    return res
      .status(400)
      .json({ message: "A user with that email already exists!" });
  }

  const hashedPassword = await hashPassword(password);

  // Only for passing user's data to verify email function
  await PendingUser.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  const emailToken = jwt.sign({ email: email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const validationURL = `${process.env.VITE_FRONTEND_URL}/verify-email?token=${emailToken}`;

  await sendEmail(
    email,
    "PlanIt Email Validation",
    `
    <p> Hi ${name}, </p>

    <p> Are you ready to start your journey with PlanIt? then please click on the verification link: ${validationURL}</p>

    <p>This link expires in an hour. </p>

    <p>Not you. Then please feel free to ignore this email. </p>

    <p>Thanks</p>
    <p>PlanIt</p>
    `
  );

  return res
    .status(200)
    .json({ message: "A validation email was sent successfully" });
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const { email } = verifyToken(token);
    const pendingUser = await PendingUser.findOne({ email: email });

    const user = await User.create({
      name: pendingUser.name,
      email: pendingUser.email,
      password: pendingUser.password,
    });

    Task.create({ userID: user._id, list: [] });

    await PendingUser.deleteOne({ email: email });

    return res
      .status(200)
      .json({ message: "The user was created successfully!" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid or expired token!" });
  }
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password!" });
  }

  const passwordsMatch = await argon2.verify(user.password, password);

  if (!passwordsMatch) {
    return res.status(401).json({ message: "Invalid email or password!" });
  }

  const loginToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", loginToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 1000,
  });

  return res.status(200).json({ message: "Logged in successfully!" });
};

const checkAuthentication = (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.sendStatus(403);
    return res.sendStatus(200);
  });
};

const resetPasswordRequest = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email: email });

  if (user) {
    const emailToken = jwt.sign({ email: email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const validationURL = `${process.env.VITE_FRONTEND_URL}/reset_password?token=${emailToken}`;

    await sendEmail(
      email,
      "PlanIt Password Reset",
      `
    <p> Hi ${user.name}, </p>

    <p> It looks like you forgot your password. No worries. You can definitely reset your password by clicking on the link: ${validationURL}</p>

    <p>This link expires in an hour. </p>

    <p>Not you. Then please feel free to ignore this email. </p>

    <p>Thanks</p>
    <p>PlanIt</p>
    `
    );
  }

  return res.status(200).json({
    message: "If the email exists, a password reset email was sent!",
  });
};

const resetPassword = async (req, res) => {
  const { token } = req.query;
  const { password } = req.body;

  try {
    const { email } = verifyToken(token);

    // check if password is at least 8 characters long and is secure enough
    if (!isPasswordValid(password)) {
      return res
        .status(400)
        .json({ message: "Password is not secure enough!" });
    }

    const hashedPassword = await hashPassword(password);

    await User.findOneAndUpdate(
      { email: email },
      { password: hashedPassword },
      { new: true }
    );

    return res
      .status(200)
      .json({ message: "Password was reset successfully!" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid or expired token!" });
  }
};

module.exports = {
  registerUserRequest,
  verifyEmail,
  loginUser,
  checkAuthentication,
  resetPasswordRequest,
  resetPassword,
};
