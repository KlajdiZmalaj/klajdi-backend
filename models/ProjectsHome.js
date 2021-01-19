const mongoose = require("mongoose");

var Schema = mongoose.Schema;

module.exports = mongoose.model(
  "ProjectsHome",
  new Schema(
    {
      id: Number,
      img: String,
      desc: String,
      link: String,
      side: String,
      title: String,
      tech: String,
    },
    { collection: "ProjectsHome" }
  )
);
