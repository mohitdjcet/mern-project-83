const path = require("path")
const fs = require("fs")

const file = "/Users/mohitkumar/Desktop/MERN-83/mern-83"
console.log(path.basename(file));
console.log(path.extname("data.txt"));

const fullPath = path.resolve("file","data.txt")
console.log(fullPath);


// const filePath = path.join(__dirname,"data.txt");

// console.log(filePath);

// fs.readFile(filePath,"utf8",(err,data)=>{
//     if(err){
//         console.log("Err");
//         return;
//     }
//     console.log(data);
    
// })

// const filePath = new URL("./data.txt", import.meta.url);
// console.log(filePath.pathname);