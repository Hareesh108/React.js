import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { About } from './components/Navbar/About';
import { Home } from './components/Navbar/Home';
import { Projects } from './components/Navbar/Projects';

function App() {
    return <BrowserRouter>
        <>      
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<About/>} /> 
            </Routes>
        </>
    </BrowserRouter>
}

export default App;