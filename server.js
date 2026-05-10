import express from 'express';

const app = express();

app.use("/", express.static("public"))

app.listen(3005)

// const logger = (req,res,next) =>{
//   console.log(`${req.method} ${req.url}`);
//   next();
// }

// app.use(logger);
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.get("/",(req,res)=>{
//   res.send("Home Page")
// })

// app.post("/form",(req,res)=>{
//   res.json(req.body)
// })

// app.listen(3005)