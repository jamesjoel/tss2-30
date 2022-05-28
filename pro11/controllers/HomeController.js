/*
const express = require("express");
const routes = express.Router();
*/

const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var url = "/";
    var obj = {url : url};
    res.render("home/index", obj);
    
});


module.exports = routes;