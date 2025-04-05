import {useState} from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Singin from "./components/Singin.jsx";
import Login from "./components/Login.jsx";



function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/singin' element={<Singin/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </>
    )
}

export default App
