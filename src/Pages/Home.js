 
import '../App.css';
 import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Logo from "../assets/logo.png"; 

export default function Home(){
    const nav = useNavigate();
     
return(
    <div className="App">
        <img src= {Logo}/>
        <h1>Home</h1>
       <Link to={"/test"}>TestPage</Link>
    </div>
)
}