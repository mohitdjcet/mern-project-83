// import fs from "fs/promises";
const fs = require("fs")


// fs.writeFile("data.txt","Mohit Kumar",(err)=>{
//     if(err){
//         console.log("Error");
//         return;
//     }
//     console.log("File Created successfully");
// })

// fs.appendFile("data.txt","\nNew Line Added")
// console.log("Data Append is working fine")

fs.unlink("data.txt",(err)=>{
    if(err){
        console.log("File not found");
        return;
    }
    console.log("File deleted successfully");
})