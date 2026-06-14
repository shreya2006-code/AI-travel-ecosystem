const upload = require("../middleware/uploadMiddleware");
const express = require("express");
const router = express.Router();

const {
  registerHotel,
} = require("../controllers/hotelController");

router.post(
  "/register",
  upload.single("document"),
  registerHotel
);

module.exports = router;