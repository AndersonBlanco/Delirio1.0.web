import * as react from "react"; 
import { Link } from "react-router";

export default function TestPage(){
    return(
        <div>
            <h1> Test Pages</h1>
            <Link to = "/">Back to Home</Link>
        </div>
    )
}