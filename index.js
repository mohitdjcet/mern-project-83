const fs = require("fs").promises;

async function fileOps() {
    try{
        await fs.writeFile("demo.txt","Hello World");
        await fs.appendFile("demo.txt","\nMohit");
        await fs.unlink("demo.txt");
        console.log("All opr completed");
    } catch (err){
        console.log("Error", err); 
    }
}
fileOps()