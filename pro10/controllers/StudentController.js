const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var url = "/student";
    var obj = {url : url};
    res.render("student/index", obj);
    
});


module.exports = routes;