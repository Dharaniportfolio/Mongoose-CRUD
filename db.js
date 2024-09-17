// MongoDB CRUD OPERATION

/*const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

let database;

async function getDatabase(){
    const client = await  MongoClient.connect('mongodb://127.0.0.1:27017')
    database =  client.db('library');

    if(!database){
        console.log("database not connected");
    }
    return database;
}

module.exports = {
    getDatabase,ObjectId
}
*/

const mongoose = require('mongoose');

async function getDatabase(){
    mongoose.connect('mongodb://127.0.0.1:27017/library')
    .then(()=>{
        console.log("connection success");
    }).catch(()=>{
        console.log("connection failed");
    })
}

module.exports = {
    getDatabase
}


