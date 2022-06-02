const routes = require("express").Router();
const Employee = require("../models/Employee");
const mongodb = require("mongodb");
const fs = require("fs");
const str = require("random-string-gen");

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
    var data = `
        Full Name : ${req.body.full_name} \n\n
        Salary : ${req.body.salary}\n\n
        Gender : ${req.body.gender}\n\n
        Contact : ${req.body.contact}\n\n
        `;

        var filename = str()+".txt";
    
    fs.appendFile("assets/"+filename, data, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        
        req.body.filename = filename;
        req.body.salary = parseInt(req.body.salary);
        Employee.save(req.body, (err)=>{
            res.redirect("/employee");
        })
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