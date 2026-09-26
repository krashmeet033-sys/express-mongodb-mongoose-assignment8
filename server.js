const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./Router/userrouter");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/userdb")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// Routes
app.use("/api", userRouter);

// Default route
app.get("/", (req, res) => {
  res.json({
    message: "User API is running"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});