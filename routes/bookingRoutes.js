// routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// Route to add a new booking
router.post("/add", async (req, res) => {
  try {
    const { user, flight, seatPreference, paymentStatus } = req.body;
    const newBooking = new Booking({
      user,
      flight,
      seatPreference,
      paymentStatus,
    });
    await newBooking.save();
    res.status(201).json({ message: "Booking added successfully", newBooking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", (req, res) => {
  res.json({ message: "List of bookings" });
});

module.exports = router;
