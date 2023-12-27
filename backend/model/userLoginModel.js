const mongoose = require("mongoose");
const validator = require("validator");
const UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
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
