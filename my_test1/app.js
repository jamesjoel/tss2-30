const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/assets"));
app.use(express.json());
app.use(express.urlencoded());

app.use(require("./config/routes"));



const  port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
})