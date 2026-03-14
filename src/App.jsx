import { useContext } from "react"
import UserContext from "./UserContext"

function App(){
  const {user, isLogin, setIsLogin} = useContext(UserContext);
  return(
    <div>
      <h1>Welcome {user}</h1>
      <button onClick={()=> setIsLogin(!isLogin)}>{isLogin ? "Logout": "Login"}</button>
    </div>
  )
}

export default App