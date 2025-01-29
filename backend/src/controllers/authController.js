const isPasswordValid = require("../utils/isPasswordValid");
const isThereSpecialCharacters = require("../utils/isThereSpecialCharacters");
const isValidEmail = require("../utils/isValidEmail");
const generateToken = require("../services/generateToken");
const sendEmail = require("../services/sendEmail");
const User = require("../schemas/User");
const PendingUser = require("../schemas/PendingUser");
const verifyToken = require("../services/verifyToken");
const hashPassword = require("../services/hashPassword");

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

  const hashedPassword = hashPassword(password);

  // Only for passing user's data to verify email function
  await PendingUser.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  const emailToken = generateToken(email);
  const validationURL = `${process.env.VITE_FRONTEND_URL}/verify-email?token=${emailToken}`;

  await sendEmail(
    email,
    "PlanIt Email Validation",
    `
    <p> Hi ${name}, </p>

    <p> Are you ready to start your journey with PlanIt? then please click on the verification link: ${validationURL}. </p>

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

    await User.create({
      name: pendingUser.name,
      email: pendingUser.email,
      password: pendingUser.password,
    });

    PendingUser.deleteOne({ email: email });

    return res
      .status(200)
      .json({ message: "The user was created successfully!" });
  } catch (error) {
    return res.status(400).json({ message: "Invalid or expired token!" });
  }
};

module.exports = {
  registerUserRequest,
  verifyEmail,
};
