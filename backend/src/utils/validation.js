const validator = require("validator");

const validateHotelRegistration = (data) => {
  const errors = [];

  if (!data.hotel_name || validator.isEmpty(data.hotel_name)) {
    errors.push("Hotel name is required");
  }

  if (!data.address || validator.isEmpty(data.address)) {
    errors.push("Address is required");
  }

  if (!data.city || validator.isEmpty(data.city)) {
    errors.push("City is required");
  }

  if (!data.country || validator.isEmpty(data.country)) {
    errors.push("Country is required");
  }

  if (
    !data.gst_number ||
    !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/.test(data.gst_number)
  ) {
    errors.push("Invalid GST Number");
  }

  if (
    !data.pan_number ||
    !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data.pan_number)
  ) {
    errors.push("Invalid PAN Number");
  }

  if (
    !data.ifsc_code ||
    !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(data.ifsc_code)
  ) {
    errors.push("Invalid IFSC Code");
  }

  return errors;
};

module.exports = {
  validateHotelRegistration,
};