const mongoose = require("mongoose");
const userSchema = require("../Schema/userschema");

const User = mongoose.model("User", userSchema);

module.exports = User;