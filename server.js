const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
app.use(require("body-parser").json());
//routes
app.set("port", process.env.PORT || 5000);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

app.use("/api/home", require("./routes/homeRouter"));
app.use("/api/work", require("./routes/workRouter"));

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
