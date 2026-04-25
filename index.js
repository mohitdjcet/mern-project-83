//HTTP Module
// const http = require("http");
import http from "http";

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/HTML"
    })
    res.end(`<h1>Mohit Kumar</h1>`);
});

server.listen(3005,()=>{
    console.log("Server is running on port 3005");
})