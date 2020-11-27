const mongoose = require("mongoose");

var Schema = mongoose.Schema;

module.exports = mongoose.model(
  "Projects",
  new Schema(
    {
      slider: Array,
      projects: Array,
      projectswork: Array,
    },
    { collection: "klajdicollection" }
  )
);
