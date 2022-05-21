const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var url = "/contact";
    var obj = {url : url};
    res.render("contact/index", obj);
    
});


module.exports = routes;