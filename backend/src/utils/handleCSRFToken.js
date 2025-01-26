const Tokens = require("csrf");

var tokens = new Tokens();

const generateCSRFToken = () => {
  const secret = tokens.secretSync();
  const token = tokens.create(secret);

  return { secret, token };
};

const validateCSRFToken = (secret, token) => {
  if (!tokens.verify(secret, token)) {
    throw new Error("Invalid CSRF token");
  }

  return true;
};

module.exports = {
  generateCSRFToken,
  validateCSRFToken,
};
