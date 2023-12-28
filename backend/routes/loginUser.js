const express = require("express");
const router = express.Router();
const User = require("../model/userLoginModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "issecret";

router.post(
  "/login",

  async (req, res) => {
    var email = req.body.email;
    var pass = req.body.password;
    console.log(email, pass, "req body");

    try {
      let userdata = await User.findOne({ email });
      console.log(userdata);
      if (!userdata) {
        return res
          .status(400)
          .json({ error: "please try with different email address" });
      }
      const pwdpassword = await bcrypt.compare(
        req.body.password,
        userdata.password
      );
      if (!pwdpassword) {
        return res.status(400).json({ error: "invalid password" });
      } else {
        data = {
          user: {
            id: userdata.id,
          },
        };
        authToken = jwt.sign(data, secret);

        return res.json({ success: true, authToken: authToken });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
