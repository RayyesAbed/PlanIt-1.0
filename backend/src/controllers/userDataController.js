const verifyToken = require("../services/verifyToken");
const User = require("../schemas/User");

const getUserData = async (req, res, next) => {
  try {
    // if no cookie is set
    if (!req.headers.cookie) {
      return res.sendStatus(401);
    }

    const token = req.headers.cookie.split("=")[1];

    // if there is no token
    if (!token) {
      return res.sendStatus(401);
    }

    const { userId } = verifyToken(token);

    const user = await User.findById(userId);

    // if user was not found
    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }

    return res.status(200).json({
      name: user.name,
      email: user.confirmedEmail,
      points: user.points,
      id: user._id,
    });
  } catch (error) {
    console.error("Error while getting user data", error);
    return res.sendStatus(500);
  }
};

module.exports = getUserData;
