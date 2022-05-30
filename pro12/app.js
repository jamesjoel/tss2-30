const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.use(express.json())
app.use(express.urlencoded())


app.get("/", (req, res)=>{

    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss2_30");
        db.collection("product").find().toArray((err, result)=>{

            res.render("index", { result : result });
        })
    })

});


app.post("/search", (req, res)=>{
    MongoClient.connect("mongodb://localhost:27017", (err, con)=>{
        var db = con.db("tss2_30");
        if(req.body.min_price == "" && req.body.max_price == "" && req.body.ratting =="")
        {
            db.collection("product").find().toArray((err, result)=>{

                res.render("index", { result : result });
            })
        }

        if(req.body.min_price != "" && req.body.max_price == "" && req.body.ratting =="")
        {
            var min_price = parseInt(req.body.min_price);
            
            db.collection("product").find({ price : { $gte : min_price } }).toArray((err, result)=>{

                res.render("index", { result : result });
            })
        }




    })
})




app.listen(3000, ()=>{
    console.log("server running");
})