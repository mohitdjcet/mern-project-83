import { Link } from "react-router";

export default function NotFound(){
    return(
        <div>
            <h2>404 - Page Not Found</h2>
            <p>Sorry, Ye page exist nhi krta hai</p>
            <Link to="/">Go to Home Page</Link>
        </div>
    )
}