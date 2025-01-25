const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log(req.body); // only for testing
});

module.exports = router;
