const express = require("express");
const router = express.Router();
const User = require("../model/userLoginModel");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "issecret";

router.post(
  "/login",
  [body("email").isEmail(), body("password").isLength({ min: 8 })],
  async (req, res) => {
    const result = await validationResult(req);
    var email = req.body.email;
    if (!result.isEmpty()) {
      return res.status(400).json({ result: result.array() });
    }
    try {
      let userdata = await User.findOne({ email });
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

        return res.json({ sucess: true, authToken: authToken });
      }
    } catch (error) {
      console.log(error);
      res.json({ sucess: false });
    }
  }
);

module.exports = router;
