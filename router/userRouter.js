const express = require("express");
const User = require("../Model/userModel");

const router = express.Router();

// POST /api/users
router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);

    console.log("User created successfully");

    res.status(201).json({
      message: "User created successfully",
      user: user
    });
  } catch (error) {
    console.error("Error creating user:", error.message);

    res.status(500).json({
      message: "Failed to create user",
      error: error.message
    });
  }
});

// GET /api/users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    console.log("Users retrieved successfully");

    res.status(200).json({
      message: "Users retrieved successfully",
      users: users
    });
  } catch (error) {
    console.error("Error retrieving users:", error.message);

    res.status(500).json({
      message: "Failed to retrieve users",
      error: error.message
    });
  }
});

module.exports = router;