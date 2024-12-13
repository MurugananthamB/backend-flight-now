// routes/attractionsRoutes.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

// Define your RapidAPI headers
const options = {
  headers: {
    "X-RapidAPI-Key": "d35b1d4464mshce1ef2bcf8679edp13b63fjsn3cae16fb49f9", // Replace with your RapidAPI key
    "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
  },
};

// Route to fetch attractions
router.get("/searchAttractions", async (req, res) => {
  try {
    const response = await axios.get(
      "https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions",
      {
        ...options,
        params: {
          id: "eyJ1ZmkiOi0yMDkyMTc0fQ%3D%3D", // Example id; replace or make dynamic as needed
          sortBy: "trending",
          page: 1,
          currency_code: "INR",
          languagecode: "en-us",
        },
      }
    );

    // Send the API response data to the client
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching attractions data:", error);
    res.status(500).json({ error: "Failed to fetch attractions data" });
  }
});

module.exports = router;
