const routes = require("express").Router();
const Employee = require("../models/Employee");
const mongodb = require("mongodb");

routes.get("/", (req, res)=>{
    var url = "/employee";
    var obj = {url : url };
    res.render("employee/index", obj);
})
routes.get("/list", (req, res)=>{
    Employee.search({}, (err, result)=>{

        var url = "/employee";
        var obj = {url : url, result : result };
        res.render("employee/list", obj);
    })
})


routes.get("/delete/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    Employee.remove({ _id : objid }, (err)=>{
        res.redirect("/employee/list");
    })

})
routes.get("/edit/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    Employee.search({ _id : objid }, (err, result)=>{
        var url = "/employee";
        var obj = {url : url, info : result[0] };
        res.render("employee/edit", obj);
    })
})

routes.post("/save", (req, res)=>{

    req.body.salary = parseInt(req.body.salary);
    Employee.save(req.body, (err)=>{
        res.redirect("/employee");
    })
})

routes.post("/update/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    Employee.edit({_id : objid}, req.body, (err)=>{
        res.redirect("/employee/list");
    })
})


module.exports = routes;