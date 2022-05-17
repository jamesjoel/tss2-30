const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));



app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/home.html");
});


app.listen(3000, ()=>{
    console.log("server running");
})