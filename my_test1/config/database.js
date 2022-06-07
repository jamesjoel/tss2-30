const MongoClient = require("mongodb").MongoClient;
const mongoUrl = "mongodb://localhost:27017";

module.exports = (cb)=>{
    MongoClient.connect(mongoUrl, cb);
}