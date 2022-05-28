const database = require("../config/database");
const dbName = "tss2_30";
const collName = "teacher";

module.exports.save=(obj, cb)=>{
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).insertOne(obj, cb);
    })
}
module.exports.edit=(where, obj, cb)=>{
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).updateMany(where, { $set : obj}, cb);
    })
}
module.exports.remove=(where, cb)=>{
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).deleteMany(where, cb);
    })
}
module.exports.search=(where, cb)=>{
    database((err, con)=>{
        var db = con.db(dbName);
        db.collection(collName).find(where).toArray(cb);
    })
}