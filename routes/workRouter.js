const express = require("express");
const router = express.Router();
const ProjectsWork = require("../models/ProjectsWork");
const Slider = require("../models/Slider");

router.get("/posts", async (req, res) => {
  console.log("we are on workposts");
  try {
    const projects = await ProjectsWork.find();
    console.log("projects", projects);
    res.json(projects);
  } catch (err) {
    //console.log("error", err);
    res.json({ message: err });
  }
});
router.post("/post", async (req, res) => {
  const { id, img, desc, link, side, title, tech } = req.body;
  console.log("posting...", req.body);
  try {
    if (id && img && desc && link && side && title && tech) {
      const singleProject = new ProjectsWork({
        id,
        img,
        desc,
        link,
        side,
        title,
        tech,
      });
      await singleProject.save();
      res.json({ message: "Succes Post" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/deletePost", async (req, res) => {
  const { id } = req.body;
  console.log("del home...", req.body);
  try {
    if (id) {
      await ProjectsWork.deleteMany({ id }, function (err, _) {
        if (err) {
          console.log("ca ka err", err);
          res.json({ message: err });
        } else {
          res.json({ message: "Deleted Succesfully" });
        }
      });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/slides", async (req, res) => {
  console.log("we are on sliders");
  try {
    const sliders = await Slider.find();
    console.log("sliders", sliders);
    res.json(sliders);
  } catch (err) {
    //console.log("error", err);
    res.json({ message: err });
  }
});
router.post("/postSlide", async (req, res) => {
  const { id, slide } = req.body;
  console.log("posting...", req.body);
  try {
    if (id && slide) {
      const singleSlide = new Slider({
        id,
        slide,
      });
      await singleSlide.save();
      res.json({ message: "Succes Post" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});
router.post("/deleteSlide", async (req, res) => {
  const { id } = req.body;
  console.log("del home...", req.body);
  try {
    if (id) {
      await Slider.deleteMany({ id }, function (err, _) {
        if (err) {
          console.log("ca ka err", err);
          res.json({ message: err });
        } else {
          res.json({ message: "Deleted Succesfully" });
        }
      });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
