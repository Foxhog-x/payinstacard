const express = require("express");

const router = express.Router();
const User = require("../model/userLoginModel");
const bycrypt = require("bcrypt");

router.post("/createuser", async (req, res) => {
  const salt = await bycrypt.genSalt(10);
  const bycryptPassword = await bycrypt.hash(req.body.password, salt);
  console.log(req.body);
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bycryptPassword,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error({ message: error.message });
    res.status(400);
  }
});

module.exports = router;
