import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {

  const user = "Mohit Kumar";
  const [isLogin, setIsLogin] = useState(false);

  return (
    <UserContext.Provider value={{user, isLogin, setIsLogin}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;