const routes = require("express").Router();

routes.get("/", (req, res)=>{
    var url = "/student";
    var obj = {url : url};
    res.render("student/index", obj);
    
});


routes.post("/save", (req, res)=>{
    req.body.age = parseInt(req.body.age);
    req.body.contact = parseInt(req.body.contact);
    console.log(req.body);
})


module.exports = routes;