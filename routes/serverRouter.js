const express = require("express");
const router = express.Router();

const { getHome } = require("../controllers/homeController");
const { getPrivate } = require("../controllers/privateController");
const { getProjects } = require("../controllers/projectsController");
const { getAbout } = require("../controllers/aboutController");

router
    .get("/home", getHome)
    .get("/private", getPrivate)
    .get("/projects", getProjects)
    .get("/about", getAbout)
    ;

module.exports = router;