// routes/flightRoutes.js
const express = require("express");
const router = express.Router();
const Flight = require("../models/Flight");

// Route to add a new flight
router.post("/add", async (req, res) => {
  try {
    const { airline, departure, arrival, date, price, availableSeats } =
      req.body;
    const newFlight = new Flight({
      airline,
      departure,
      arrival,
      date,
      price,
      availableSeats,
    });
    await newFlight.save();
    res.status(201).json({ message: "Flight added successfully", newFlight });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", (req, res) => {
  res.json({ message: "List of flights" });
});

module.exports = router;
