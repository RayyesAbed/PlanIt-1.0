const express = require("express");
const {
  getUserData,
  uploadUserAvatar,
} = require("../controllers/userDataController");
const upload = require("../configs/multer");
const router = express.Router();

router.get("/", getUserData);

router.post("/upload_avatar", upload.single("avatar"), uploadUserAvatar);

module.exports = router;
