const express = require("express");
const cors = require("cors");
const hotelRoutes = require("./routes/hotelRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/hotels", hotelRoutes);

app.get("/", (req, res) => {
  res.send("AI Travel Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});