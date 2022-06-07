const routes = require("express").Router();
const Teacher = require("../models/Teacher");
const mongodb = require("mongodb");

routes.get("/", (req, res)=>{
    Teacher.find({}, (err, result)=>{

        res.render("teacher/index", { result : result });
    })
})

routes.post("/", (req, res)=>{
    // console.log(req.body);
    req.body.salary = parseInt(req.body.salary);
    Teacher.insert(req.body, (err)=>{
        res.redirect("/teacher");
    })
})

routes.get("/delete/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Teacher.delete({ _id : objid }, (err)=>{
        res.redirect("/teacher");
    })
})

routes.get("/edit/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    Teacher.find({ _id : objid }, (err, result)=>{
        res.render("teacher/edit", { result : result[0] });
    })
})

routes.post("/update/:id", (req, res)=>{
    var objid = mongodb.ObjectId(req.params.id);
    req.body.salary = parseInt(req.body.salary);
    Teacher.update({ _id : objid }, req.body, (err)=>{
        res.redirect("/teacher");
    })

})

module.exports = routes;