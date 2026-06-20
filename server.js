import mongoose from "mongoose";
import express from "express";

const app = express();
const PORT = 5001;

//Middleware
app.use(express.json())

//DB Connection
mongoose.connect("mongodb://localhost:27017/myApp")
  .then(()=> console.log("MD Connected"))
  .catch(err => console.log("Error: ", err))

//Schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    age: Number,
    email:{
        type: String,
        unique: true
    }
})

//Model
const User = mongoose.model("User", userSchema);

//Create API
app.post("/users", async (req,res)=>{
  const user = new User(req.body);
  const saved = await user.save();
  res.json(saved)
})

app.get("/users", async (req,res)=>{
  const users = await User.find();
  res.json(users)
})

app.get("/users/:id", async (req,res)=>{
  const user = await User.findById(req.params.id)
  res.json(user)
})

app.put("/users/:id", async (req,res)=>{
  const updated = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.json(updated)
})

app.delete("/users/:id", async (req,res)=>{
  await User.findByIdAndDelete(req.params.id);
  res.json({
    message:"User Deleted"
  })
})

app.listen(PORT)