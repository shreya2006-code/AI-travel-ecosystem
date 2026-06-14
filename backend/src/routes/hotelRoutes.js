const express = require("express");
const router = express.Router();

const {
  registerHotel,
} = require("../controllers/hotelController");

router.post("/register", registerHotel);

module.exports = router;