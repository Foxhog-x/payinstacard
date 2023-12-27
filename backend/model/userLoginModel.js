const mongoose = require("mongoose");

const usersSchema = new mongoose.schema({});

module.export = mongoose.model("users", usersSchema);
