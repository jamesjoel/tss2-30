const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var url = "/about";
    var obj = {url : url};
    res.render("about/index", obj);
    
});
routes.get("/more", (req, res)=>{
    var url = "/about/more";
    var obj = {url : url};
    res.render("about/more", obj);
    
});
routes.get("/histroy", (req, res)=>{
    var url = "/about/histroy";
    var obj = {url : url};
    res.render("about/histroy", obj);
    
});


module.exports = routes;