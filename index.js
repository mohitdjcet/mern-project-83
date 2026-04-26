import axios from "axios"

async function getUsers(){
    try{
        const responce = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(responce.data);
    } catch(error){
        console.log(error);
    }
}
getUsers()