const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
});

// localhost:3000/about
app.get("/about", (req, res)=>{
    res.sendFile(__dirname+"/about.html");
})


app.get("/contact", (req, res)=>{
    res.sendFile(__dirname+"/contact.html");
})

app.get("/help", (req, res)=>{
    res.sendFile(__dirname+"/help.html");
})





// create a virtual web server with port number -- localhost
app.listen(3000, ()=>{ 
    console.log("server running");
}); 

