// import fs from "fs"

// const data = fs.readFileSync("test.txt","utf8");
// console.log(data);
// console.log("Progream end");

// console.log("Tsk-1");
// setTimeout(()=>{
//     console.log("Tsk-2");
// },2000)

// console.log("Tast-3");


// function greet(name, callback){
//     console.log("Hello "+ name);
//     callback()
// }
// function sayBye(){
//     console.log("Bye");
// }
// greet("Mohit",sayBye)

function loginUser(callback){
    setTimeout(()=>{
        console.log("User Logged In");
        callback()
    },1000)
}
function getProfile(callback){
    setTimeout(()=>{
        console.log("Profile Loaded");
        callback()
    },1000)
}
function getPost(callback){
    setTimeout(()=>{
        console.log("Posts Loaded");
        callback()
    },1000)
}

loginUser(()=>{
    getProfile(()=>{
        getPost(()=>{
            console.log("All Task Done");
        })
    })
})