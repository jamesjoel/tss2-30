const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    var a = "Flipkart.com";

    // var obj = { logo : a, name : "Rohit" };

    // res.render("home", obj);

    res.render("home", { logo : "Google.com", name : "Amar", a : 12, x :"Mumbai", y : "Pune" })
});






app.get("/about", (req, res)=>{

    var category = ["Samsung", "LG", "Sony", "HTC", "I-Phone","Samsung", "LG", "Sony", "HTC", "I-Phone","Samsung", "LG", "Sony", "HTC", "I-Phone","Samsung", "LG", "Sony", "HTC", "I-Phone","Samsung", "LG", "Sony", "HTC", "I-Phone","Samsung", "LG", "Sony", "HTC", "I-Phone"];

    var info = [
        {
            name : "amar",
            age : 25,
            city : "pune"
        },
        {
            name : "mohit",
            age : 22,
            city : "bhopal"
        },
        {
            name : "nidhi",
            age : 20,
            city : "mumbai"
        }
    ];

    var obj = { data : info, cate : category };

    res.render("about", obj);
})
















const port = 3000;
app.listen(port, ()=>{
    console.log("server running");
})

/*

    res.sendFile()      ------ for HTML file
    
    res.render()        ------ for ejs (file+data)
    
    res.send()          ------ only data send

    res.redirect()      ------ for redirect to another url/route


*/