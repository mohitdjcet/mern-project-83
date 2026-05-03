import express from "express"

const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Welcome to Home Page")
})

app.get("/users", (req,res)=>{
    console.log("Users API hit");
    const users = {
        "name" :"Mohit",
        "age":24
    };
    res.json(users)
})

app.get("/user/search",(req,res)=>{
    const price = req.query.price;

    res.send(`Search for ${price}`)
})

app.post("/add-user",(req,res)=>{
    const user = req.body;

    res.json({
        message: "User Added Fine",
        user: user
    })
})

app.listen(3005,()=>{
    console.log("Server is Running on port 3005");
})