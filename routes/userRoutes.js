import express from "express";
import { db } from "../config/db.js";
import { ObjectId } from "mongodb";

const app = express.Router();

//POST API-Create User
app.post("/users", async (req,res)=>{
    const user = req.body;
    const result = await db.collection("users").insertOne(user);
    res.json(result)
})

//GET-Read User
app.get("/users", async (req,res)=>{
    const users = await db.collection("users").find().toArray();
    res.json(users)
})

//GET by ID
app.get("/users/:id", async (req,res)=>{
    const id = req.params.id;
    const users = await db.collection("users").findOne({_id:new ObjectId(id)});
    res.json(users)
})

app.put("/users/:id",async (req,res)=>{
    const id = req.params.id;
    const updatedData = req.body;

    const result = await db.collection("users").updateOne(
        {_id:new ObjectId(id)},
        {$set: updatedData}
    )
    res.json(result)
})

app.delete("/users/:id",async (req,res)=>{
    const id = req.params.id;

    const result = await db.collection("users").deleteOne({_id:new ObjectId(id)})

    res.json({
        message: "User Deleted Successfully",
        result
    });
})
export default app;