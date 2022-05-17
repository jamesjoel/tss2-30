const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));

app.set("view engine", "ejs");


app.get("/", (req, res)=>{
    var obj = { name : "Amar", age : 25, city : "indore" };
    res.render("home", obj);
})


const port = 3000;
app.listen(port, ()=>{
    console.log("server running");
})