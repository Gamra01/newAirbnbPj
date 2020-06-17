const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// import routes
const indexRouter = require("./router/index");
const profileRouter = require("./router/profile");
const signupRouter = require("./router/signup");

const app = express();

// body parser (recevoir les informations depuis la page d'inscription (form))
app.use(bodyParser.urlencoded({ extended: true }));

// views: ejs
app.set("view engine", "ejs");
app.set("views", "views");

// use routes
app.use(express.static("views")); // set stylesheet path
app.use("/", indexRouter);
app.use("/profile", profileRouter);
app.use("/signup", signupRouter);

mongoose
  .connect("mongodb://localhost:27017/airbnb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(3000);
  })
  .catch((e) => console.log(e));
