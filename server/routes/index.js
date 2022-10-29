/*
File name: COMP229-F2022 MidTerm(301157840)
Author's name: Hyunjin Park
Student ID: 301157840
Web App name: https://midterm-229.herokuapp.com/cars
*/



// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let car = require("../models/cars");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    cars: "",
  });
});

module.exports = router;
