const isPasswordValid = require("../utils/isPasswordValid");
const isThereSpecialCharacters = require("../utils/isThereSpecialCharacters");
const isValidEmail = require("../utils/isValidEmail");

const registerUser = (req, res) => {
  const { name, email, password } = req.body;

  // check if any value of (name, email, password) is empty
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // check for special characters in name and email
  if (isThereSpecialCharacters(name) || isThereSpecialCharacters(email)) {
    return res.status(400).json({
      message: "Special characters are not allowed in name and email!",
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
};

module.exports = {
  registerUser,
};
