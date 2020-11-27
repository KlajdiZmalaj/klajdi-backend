const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
app.use(require("body-parser").json());
//routes
app.set("port", process.env.PORT || 5000);

app.use("api/", require("./routes/projects"));

//db connect
mongoose.connect(
  `${process.env.URL}`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connect to db");
  }
);
app.listen(process.env.PORT || 5000, function () {
  console.log(`listening on ${process.env.PORT || 5000}`);
});

//
