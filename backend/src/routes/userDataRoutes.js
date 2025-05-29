const express = require("express");
const {
  getUserData,
  modifyUserAvatar,
  getUserAvatar,
} = require("../controllers/userDataController");
const upload = require("../configs/multer");
const router = express.Router();

router.get("/", getUserData);

router.post("/upload_avatar", upload.single("avatar"), modifyUserAvatar);

router.get("/get_avatar", getUserAvatar);

module.exports = router;
