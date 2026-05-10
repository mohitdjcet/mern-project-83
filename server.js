// import express from 'express';

// const app = express();

// app.get("/",(req,res)=>{
//   res.send("Home page")
// })

// app.get("/error", (req,res,next)=>{
//   const error = new Error("Something went wrong")
//   error.status = 500;
//   next(error)
// })

// app.use((err,req,res,next)=>{
//   console.log("Error", err.message);
  
//   res.status(err.status || 500).json({
//     success:false,
//     message: err.message
//   })
// })

// app.listen(3005)

// 1xx - Informational
// 2xx - Sucess
// 3xx - Redirect
// 4xx - client Error
// 5xx - server eoor

import express from 'express';

const app = express();
app.use(express.json());

//GET Route
app.get("/",(req,res)=>{
  res.status(200).send("Success")
})

//POST Route
app.post("/user",(req,res)=>{
  const user = req.body;

  if(!user.name){
    return res.status(400).json({
      message:"Name is required"
    })
  }

  res.status(201).json({
    message:"User Created",
    user
  })
})
app.listen(3005)