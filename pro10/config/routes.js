const express = require("express");
const routes = express.Router();


routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));
routes.use("/student", require("../controllers/StudentController"));

routes.use("*", require("../controllers/NotFoundController"));



module.exports = routes;