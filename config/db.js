import express from "express"
import { MongoClient } from "mongodb"

const app = express();
const PORT = 5001;

//MongoDB Url
const url = "mongodb://localhost:27017"
//Create Client
const client = new MongoClient(url);

//DB name
const dbName = "myApp";
let db;

async function connectDB(){
    await client.connect();
    console.log("DB Connected");
    db = client.db(dbName)
}

export { connectDB, db };