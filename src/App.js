 import './App.css';
 import TestPage from './test';
 import Home from './Home';
import { BrowserRouter, Route, Link, Routes, createBrowserRouter } from 'react-router';
 
function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path= "/" element = {<Home/>}/>
      <Route path= "/test" element = {<TestPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
