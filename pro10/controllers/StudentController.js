const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const database = require("../config/database");




routes.get("/", (req, res)=>{
    var url = "/student";
    var obj = {url : url};
    res.render("student/index", obj);
    
});


routes.post("/save", (req, res)=>{

    req.body.age = parseInt(req.body.age);
    req.body.contact = parseInt(req.body.contact);


    MongoClient.connect(database.dbUrl, (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        var db = con.db(database.dbName);
        db.collection("student").insertOne(req.body, (err)=>{
            if(err){
                console.log(err);
                return;
            }

            // console.log("**************** DATA SAVED *********");
            res.redirect("/student/list");
        })
    })
    
})


routes.get("/list", (req, res)=>{

    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection("student").find().toArray((err, result)=>{
            // console.log(result);
            var url = "/student";
            var obj = {url : url, stu : result };
            res.render("student/list", obj);
        })
    })

})

routes.get("/detail/:a", (req, res)=>{
    var id = req.params.a; // 123
    // console.log(req.params.a);
    var objid = mongodb.ObjectId(id); // ObjectId(123)
    
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection("student").find({ _id : objid }).toArray((err, result)=>{
            // console.log(result);
            // return;
            var url = "/student";
            var obj = {url : url, info : result[0]};
            res.render("student/detail", obj);
        })
    })


})

module.exports = routes;