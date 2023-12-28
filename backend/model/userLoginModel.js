const mongoose = require("mongoose");
const validator = require("validator");
const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    min: 8,
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", UsersSchema);
