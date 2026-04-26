import express from 'express';

const app = express();
const PORT = 3005;
//Middleware
app.use(express.json())

//Home Route
app.get("/",(req,res)=>{
    res.send("Home Page")
})

//POST API Route
app.post("/data",(req,res)=>{
    const userData = req.body;

    res.json({
        message:"Data Received",
        data:userData
    })
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.get("/contact",(req,res)=>{
    res.send("Contactus Page")
})

app.listen(PORT,()=>{
    console.log("Start at 3005 PORT");
});