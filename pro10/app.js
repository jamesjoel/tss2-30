const express = require("express");
const app = express();


const routes = require("./config/routes");

app.use(express.static(__dirname+"/assets"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded());


app.use(routes);

/*
app.use((req, res)=>{

})

app.use("/about", (req, res)=>{

})

app.use(["/about", "/contact"], (req, res)=>{


})
*/




// console.log("FIRST ----------");


// const port = process.env.PORT || 3000;
// app.listen(port, ()=>{
//     // console.log("server running");
//     console.log("SECOND ----------");
//     console.log("THIRD ----------");
// });


app.listen(3000, (){

    console.log("server running");
});