const mongoose = require("mongoose");

var Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Slider",
  new Schema(
    {
      id: Number,
      slide: String,
    },
    { collection: "Slider" }
  )
);
