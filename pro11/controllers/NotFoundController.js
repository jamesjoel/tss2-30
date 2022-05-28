const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var url = "/";
    var obj = {url : url};
    res.render("notfound/index", obj);
    
});



module.exports = routes;