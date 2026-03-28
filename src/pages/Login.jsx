import { useNavigate } from "react-router";

export default function Login(){
    const navigate = useNavigate();

    const handlClick = ()=>{
        navigate("/users/1")
    }

    return(
        <div>
            <h2>Login Page</h2>
            <button onClick={handlClick}>Login and Go to users Page</button>
        </div>
    )
}