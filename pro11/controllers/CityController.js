const routes = require("express").Router();
const City = require("../models/City");
var recPerPages = 120;
routes.get("/", (req, res)=>{
    

    var skip = 0;
    var activeClass = 1;
    City.search({}, skip, recPerPages, (err, result1)=>{

        City.count((err, result2)=>{
            // console.log(result2);
            var totalPages = Math.ceil(result2/recPerPages);
            res.render("city/index", { url : "/city", result : result1, totalPages : totalPages, sno : skip, activeClass : activeClass });
        })
    })

})


routes.get("/:a", (req, res)=>{
    var pageNo = req.params.a;
    var x = pageNo-1;
    var skip = x*recPerPages;
    City.search({}, skip, recPerPages, (err, result1)=>{

        City.count((err, result2)=>{
            // console.log(result2);
            var totalPages = Math.ceil(result2/recPerPages);
            res.render("city/index", { url : "/city", result : result1, totalPages : totalPages, sno : skip, activeClass : pageNo });
        })
    })
})




module.exports = routes;