function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User Logged In");
            resolve();
        }, 1000);
    });
}

function getProfile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Profile Loaded");
            resolve();
        }, 1000);
    });
}

function getPost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Posts Loaded");
            resolve();
        }, 1000);
    });
}

async function runApp() {
    await loginUser();
    await getProfile();
    await getPost();
    console.log("All Task Done");
}

runApp();
// loginUser()
//     .then(() => getProfile())
//     .then(() => getPost())
//     .then(() => {
//         console.log("All Task Done");
//     });

// loginUser(()=>{
//     getProfile(()=>{
//         getPost(()=>{
//             console.log("All Task Done");
//         })
//     })
// })

// function step1(){
//     return Promise.resolve("Step 1 done")
// }
// function step2(){
//     return Promise.resolve("Step 2 done")
// }
// function step3(){
//     return Promise.resolve("Step 3 done")
// }
// step1()
//     .then((result)=>{
//         console.log(result);
//         return step2();
//     }).then((result)=>{
//         console.log(result);
//         return step3();
//     }).then((result)=>{
//         console.log(result);
//     })