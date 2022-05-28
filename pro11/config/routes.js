const express = require("express");
const routes = express.Router();


routes.use("/", require("../controllers/HomeController"));
routes.use("/about", require("../controllers/AboutController"));
routes.use("/contact", require("../controllers/ContactController"));
routes.use("/employee", require("../controllers/EmployeeController"));

routes.use("*", require("../controllers/NotFoundController"));



module.exports = routes;