const routes = require("express").Router();

routes.use("/", require("../controllers/HomeController"));
routes.use("/teacher", require("../controllers/TeacherController"));


module.exports = routes;