const express = require("express");
const router = express.Router();
const Projects = require("../models/Projects");

router.get("/", async (req, res) => {
  console.log("we are on rojects");
  try {
    const projects = await Projects.find();
    console.log("projects", projects);
    res.json(projects);
  } catch (err) {
    console.log("error", err);
    res.json({ message: err });
  }
});

module.exports = router;
