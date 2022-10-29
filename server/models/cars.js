/*
File name: COMP229-F2022 MidTerm(301157840)
Author's name: Hyunjin Park
Student ID: 301157840
Web App name: https://midterm-229.herokuapp.com/cars
*/

let mongoose = require("mongoose");

// create a model class
let Car = mongoose.Schema(
  {
    Carname: String,
    Category: String,
    Carmodel: String,
    Price: Number,
  },
  {
    collection: "cars",
  }
);

module.exports = mongoose.model("cars", Car);
