// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Route to add a new user
router.post("/register", async (req, res) => {
  console.log(req.body);
  
  try {
    const { name, email, password, preferences } = req.body;
    const newUser = new User({ name, email, password, preferences });
    await newUser.save();
    res.status(201).json({ message: "User added successfully", newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to login a user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", (req, res) => {
  res.json({ message: "List of users" });
});

module.exports = router;
