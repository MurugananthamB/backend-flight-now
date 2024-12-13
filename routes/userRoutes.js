// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Route to add a new user
router.post("/add", async (req, res) => {
  try {
    const { name, email, password, preferences } = req.body;
    const newUser = new User({ name, email, password, preferences });
    await newUser.save();
    res.status(201).json({ message: "User added successfully", newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", (req, res) => {
  res.json({ message: "List of users" });
});

module.exports = router;
