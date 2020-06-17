const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.render("signup.ejs");
});

router.post("/", async (req, res) => {
  const emailDyalna = req.body.email;
  const passwordDyalna = req.body.password;

  const checkUser = await User.find({ email: emailDyalna });

  if (checkUser) {
    return res.send("user with this email already exists");
  }

  User.create({ email: emailDyalna, password: passwordDyalna });

  res.redirect("/login");
});

module.exports = router;
