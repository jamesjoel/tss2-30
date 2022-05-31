const routes = require("express").Router();
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const database = require("../config/database");


routes.get("/demo", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection("city").find().toArray((err, result)=>{
            result.forEach((x)=>{
                x.id = parseInt(x.id);
                db.collection("city").updateMany({ _id : mongodb.ObjectId(x._id)}, { $set : x }, (err)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                })
            })
        })
    })
})




routes.get("/", (req, res)=>{
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection("city").find().toArray((err, result1)=>{

            db.collection("city").distinct("state", (err, result2)=>{
                // console.log(result2);
                var url = "/student";   
                var obj = {url : url, city : result1, state : result2 };
                res.render("student/index", obj);
            })

        })
    })
    
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

routes.post("/update/:a", (req, res)=>{
    // console.log(req.params.a);
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    // console.log(req.body);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection("student").updateMany({ _id : objid }, { $set : req.body }, (err)=>{
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
routes.get("/delete/:a", (req, res)=>{
    // console.log(req.params.a);
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);
    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection("student").deleteMany({ _id : objid }, (err)=>{
            res.redirect("/student/list");
        })
    })
})
routes.get("/edit/:a", (req, res)=>{
    var id = req.params.a;
    var objid = mongodb.ObjectId(id);


    MongoClient.connect(database.dbUrl, (err, con)=>{
        var db = con.db(database.dbName);
        db.collection("student").find({ _id  : objid}).toArray((err, result1)=>{

            
            db.collection("city").find().toArray((err, result2)=>{

                var url = "/student";
                var obj = {url : url, info : result1[0], city : result2};
                res.render("student/edit", obj);
            })
            

        })
    })

})

module.exports = routes;