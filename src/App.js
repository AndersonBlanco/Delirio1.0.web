// src/App.js

import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";
import Home from "./Pages/Home"; 
import TestPage from "./Pages/test"; 
 

function App() {
    return (
        <Router>
          <nav>
            
          </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/test" element={<TestPage />}/>
            </Routes>
        </Router>
    );
}

export default App;