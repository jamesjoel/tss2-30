const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("home")
})
app.get("/about", (req, res)=>{
    res.render("about")
})
app.get("/contact", (req, res)=>{
    res.render("contact")
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