const express = require("express");
const {
  getUserData,
  modifyUserAvatar,
  getUserAvatar,
} = require("../controllers/userDataController");
const upload = require("../configs/multer");
const router = express.Router();
const checkAuthentication = require("../middlewares/checkAuthentication");

router.get("/", checkAuthentication, getUserData);

router.post(
  "/upload_avatar",
  checkAuthentication,
  upload.single("avatar"),
  modifyUserAvatar
);

router.get("/get_avatar", checkAuthentication, getUserAvatar);

module.exports = router;
