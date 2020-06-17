const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { localsName } = require("ejs");

router.get("/", (req, res) => {
  res.render("login.ejs");
});

router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const checkUser = await User.findOne({
      email: email,
      password: password,
    });
    if (checkUser) {
      return res.redirect("/profile");
    }
    res.status(404).send("incorrect information");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
