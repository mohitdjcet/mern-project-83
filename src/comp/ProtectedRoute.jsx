import { Navigate } from "react-router"
import {isLoggedIn} from "../utils/auth"

export default function ProtectedRoute({children}){
    const auth = isLoggedIn();

    if(!auth){
        return <Navigate to="/login" replace />
    }

    return children
}