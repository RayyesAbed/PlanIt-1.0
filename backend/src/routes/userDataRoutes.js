const express = require("express");
const {
  getUserData,
  uploadUserAvatar,
  getUserAvatar,
} = require("../controllers/userDataController");
const upload = require("../configs/multer");
const router = express.Router();

router.get("/", getUserData);

router.post("/upload_avatar", upload.single("avatar"), uploadUserAvatar);

router.get("/get_avatar", getUserAvatar);

module.exports = router;
