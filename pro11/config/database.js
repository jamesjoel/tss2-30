const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbUrl = "mongodb://localhost:27017";

module.exports = (cb)=>{
    MongoClient.connect(dbUrl, cb)
}