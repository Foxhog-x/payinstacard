const express = require("express");
const app = express();
const router = express.Router();
const User = require("../model/userLoginModel");

router.post("/login", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error({ message: error.message });
    res.status(400);
  }
  // try {
  //
  // } catch (error) {
  //
  // }
  //   try {
  //     await User.create({
  //         name: req.body.name,
  //         password : secpassword ,
  //         email: req.body.email,
  //         location:req.body.location
  //     })
  //     res.json({sucess:true})

  // } catch (error) {
  //     console.log(error)
  //     res.json({sucess:false})

  // };
});

module.exports = router;
