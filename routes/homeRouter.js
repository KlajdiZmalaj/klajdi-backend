const express = require("express");
const router = express.Router();
const ProjectsHome = require("../models/ProjectsHome");

router.get("/posts", async (req, res) => {
  console.log("we are on homeposts");
  try {
    const projects = await ProjectsHome.find();
    console.log("projects", projects);
    res.json(projects);
  } catch (err) {
    //console.log("error", err);
    res.json({ message: err });
  }
});
router.post("/post", async (req, res) => {
  const { id, img, desc, link, side, title } = req.body;
  console.log("posting...", req.body);
  try {
    if (id && img && desc && link && side && title) {
      const singleProject = new ProjectsHome({
        id,
        img,
        desc,
        link,
        side,
        title,
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
      await ProjectsHome.deleteMany({ id }, function (err, _) {
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
