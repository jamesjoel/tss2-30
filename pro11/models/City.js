const database = require("../config/database");

module.exports.search = (where, skip, limit, cb)=>{
    database((err, con)=>{
        var db = con.db("tss2_30");
        db.collection("city").find(where).skip(skip).limit(limit).toArray(cb);
    })
}

module.exports.count = (cb)=>{
    database((err, con)=>{
        var db = con.db("tss2_30");
        db.collection("city").count(cb);
    })
}