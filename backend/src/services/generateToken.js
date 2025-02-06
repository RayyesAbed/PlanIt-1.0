const jwt = require("jsonwebtoken");

const generateToken = (email, type) => {
  return jwt.sign({ email, type }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = generateToken;
