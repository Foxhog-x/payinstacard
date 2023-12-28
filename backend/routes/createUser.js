const express = require("express");

const router = express.Router();
const User = require("../model/userLoginModel");
const bycrypt = require("bcrypt");

router.post(
  "/createuser",

  async (req, res) => {
    const salt = await bycrypt.genSalt(10);
    const bycryptPassword = await bycrypt.hash(req.body.password, salt);

    try {
      await User.create({
        email: req.body.email,
        password: bycryptPassword,
      });
      res.status(201).json({ sucess: true });
    } catch (error) {
      console.log(error);
      res.status(201).json({ sucess: false });
    }
  }
);

module.exports = router;
