const hotelModel = require("../models/hotelModel");


const registerHotel = async (req, res) => {
  try {
    console.log("Hotel API Hit");
    console.log(req.body);
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