 import { Link } from 'react-router';
import './App.css';
 
export default function Home(){
return(
    <div className="App">
        <h1>Home</h1>
        <Link to={"/test"} title='TestPage'>TestPage</Link>
    </div>
)
}