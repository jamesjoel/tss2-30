const routes = require("express").Router();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


routes.get("/", (req, res)=>{
    var url = "/student";
    var obj = {url : url};
    res.render("student/index", obj);
    
});


routes.post("/save", (req, res)=>{

    req.body.age = parseInt(req.body.age);
    req.body.contact = parseInt(req.body.contact);


    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        if(err){
            console.log(err);
            return;
        }
        var db = con.db("tss2_30");
        db.collection("student").insertOne(req.body, (err)=>{
            if(err){
                console.log(err);
                return;
            }

            // console.log("**************** DATA SAVED *********");
            res.redirect("/");
        })
    })
    
})


module.exports = routes;