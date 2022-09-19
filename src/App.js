import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes,} from 'react-router-dom';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Timer from "./components/Timer/Timer";
import Categories from "./components/Categories/Categories";
import Contacts from "./components/Contacts/Contacts";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="App-header">
                    <Header/>
                    <Routes>
                        <Route path="/home/" element={<Home/>}/>
                        <Route path="/timer/*" element={<Timer/>}/>
                        <Route path="/categories/*" element={<Categories/>}/>
                        <Route path="/about/*" element={<About/>}/>
                        <Route path="/contacts/*" element={<Contacts/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
