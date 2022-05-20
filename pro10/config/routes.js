const express = require("express");
const routes = express.Router();


routes.get("/", (req, res)=>{
    var url = "/";
    var obj = {url : url};
    res.render("home/index", obj);
})


routes.get("/about", (req, res)=>{
    var url = "/about";
    var obj = {url : url};
    res.render("about/index", obj);
})


routes.get("/contact", (req, res)=>{
    var url = "/contact";
    var obj = {url : url};
    res.render("contact/index", obj);
})


routes.get("/student", (req, res)=>{
    var url = "/student";
    var obj = { url : url };
    res.render("student/index", obj);
})

module.exports = routes;