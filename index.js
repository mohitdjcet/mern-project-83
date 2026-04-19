import fs from "fs/promises";

// console.log("Start");

// // fs.readFile("data.txt","utf8",(err,data)=>{
// //     if(err){
// //         console.log("Error", err);
// //         return;
// //     }
// //     console.log("File Content:");
// //     console.log(data);
// // });

// const data = fs.readFileSync("data.txt","utf8")
// console.log(data);

// console.log("End");

async function readData(){
    try{
        const data = await fs.readFile("data.txt","utf8");
        console.log("File Content:");
        console.log(data);
    } catch(err){
        console.log("Error", err.message);
    }
}
readData();