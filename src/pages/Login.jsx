import { useNavigate } from "react-router";
import {login} from "../utils/auth"

function Login() {
  const navigate = useNavigate();

  const handleClick = () =>{
    login()
    navigate("/dashboard")
  }
  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default Login;