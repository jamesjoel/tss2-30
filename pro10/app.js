const express = require("express");
const app = express();
const routes = require("./config/routes");



app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.use(routes);

/*
app.use((req, res)=>{

})

app.use("/about", (req, res)=>{

})

app.use(["/about", "/contact"], (req, res)=>{


})
*/





const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running");
});