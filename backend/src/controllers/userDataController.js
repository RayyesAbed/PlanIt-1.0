const verifyToken = require("../services/verifyToken");
const User = require("../schemas/User");
const fs = require("fs");
const fileType = require("file-type");
const path = require("path");
const s3 = require("../configs/s3Connect");
const { PutObjectCommand } = require("@aws-sdk/client-s3");

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
      toBeConfirmedEmail: user.toBeConfirmedEmail,
      confirmedEmail: user.confirmedEmail,
      points: user.points,
      id: user._id,
    });
  } catch (error) {
    console.error("Error while getting user data", error);
    return res.sendStatus(500);
  }
};

const uploadUserAvatar = async (req, res) => {
  if (!req.headers.cookie) {
    return res.sendStatus(401);
  }

  const token = req.headers.cookie.split("=")[1];

  // if there is no token
  if (!token) {
    return res.sendStatus(401);
  }

  const { userId } = verifyToken(token);

  const fileBuffer = req.file.buffer;
  const type = await fileType.fromBuffer(fileBuffer);

  if (!type || !type.mime.startsWith("image/")) {
    return res.status(400).json({ message: "Only image types are allowed" });
  }

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: `avatars/${userId}`,
    Body: fileBuffer,
    ContentType: type.mime,
  });

  await s3.send(command);

  return res.status(201).json({ message: "Uploaded successfully!" });
};

module.exports = {
  uploadUserAvatar,
  getUserData,
};
