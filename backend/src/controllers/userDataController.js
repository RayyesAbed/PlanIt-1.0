const verifyToken = require("../services/verifyToken");
const User = require("../schemas/User");
const fs = require("fs");
const fileType = require("file-type");
const path = require("path");
const s3 = require("../configs/s3Connect");
const {
  PutObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

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

  let command;

  if (!req.file) {
    command = new DeleteObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: `avatars/${userId}`,
    });
  } else {
    const fileBuffer = req.file.buffer;
    const type = await fileType.fromBuffer(fileBuffer);

    if (!type || !type.mime.startsWith("image/")) {
      return res.status(400).json({ message: "Only image types are allowed" });
    }

    command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: `avatars/${userId}`,
      Body: fileBuffer,
      ContentType: type.mime,
    });
  }

  await s3.send(command);

  return res.status(200).json({ message: "Modified successfully!" });
};

const getUserAvatar = async (req, res) => {
  if (!req.headers.cookie) {
    return res.sendStatus(401);
  }

  const token = req.headers.cookie.split("=")[1];

  // if there is no token
  if (!token) {
    return res.sendStatus(401);
  }

  const { userId } = verifyToken(token);

  const headParams = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: `avatars/${userId}`,
  };

  try {
    await s3.send(new HeadObjectCommand(headParams)); // First check if the object exists in the bucket
    const getParams = { ...headParams }; // If exists, then copy the head params to the get params object
    const command = new GetObjectCommand(getParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 3600 }); // Then generate the signed URL
    return res.status(200).json({ url: url });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate signed URL" });
  }
};

module.exports = {
  uploadUserAvatar,
  getUserData,
  getUserAvatar,
};
