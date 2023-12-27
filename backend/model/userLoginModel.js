const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    typeof: String,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    min: 8,
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", UsersSchema);
