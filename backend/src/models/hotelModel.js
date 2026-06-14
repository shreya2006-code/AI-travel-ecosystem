const pool = require("../config/db");

const createHotel = async (hotelData) => {
  const {
    owner_id,
    hotel_name,
    description,
    address,
    city,
    state,
    country,
    gst_number,
    pan_number,
    bank_account_number,
    ifsc_code,
    latitude,
    longitude,
    property_type,
    document_path,
  } = hotelData;

  const query = `
    INSERT INTO hotels (
      owner_id,
      hotel_name,
      description,
      address,
      city,
      state,
      country,
      gst_number,
      pan_number,
      bank_account_number,
      ifsc_code,
      latitude,
      longitude,
      property_type,
      document_path
    )
    VALUES (
      $1,$2,$3,$4,$5,$6,$7,
      $8,$9,$10,$11,$12,$13,$14,$15
    )
    RETURNING *;
  `;

  const values = [
    owner_id,
    hotel_name,
    description,
    address,
    city,
    state,
    country,
    gst_number,
    pan_number,
    bank_account_number,
    ifsc_code,
    latitude,
    longitude,
    property_type,
    document_path,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = {
  createHotel,
};