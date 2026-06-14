const hotelModel = require("../models/hotelModel");

const {
  validateHotelRegistration,
} = require("../utils/validation");

const registerHotel = async (req, res) => {
  try {
    console.log("Hotel API Hit");
    console.log(req.body);

    const errors = validateHotelRegistration(req.body);

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            errors,
        });
    }
    const hotel = await hotelModel.createHotel(req.body);

    res.status(201).json({
      success: true,
      message: "Hotel registered successfully",
      data: hotel,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Hotel registration failed",
    });
  }
};

module.exports = {
  registerHotel,
};