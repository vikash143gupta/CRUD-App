import React from "react";
import './Components/homecrud.css'
import User from "./Components/User";
import Homecrud from "./Components/Homecrud";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Createuser from "./Components/Createuser";
import Editusers from "./Components/Editusers";



const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Homecrud />

                <Routes>
                    <Route element ={<Createuser/>} path ="/"/>
                     <Route element ={<User/>} path ="/users"/>
                     <Route element={<Editusers/>} path ="/edit/:index"/>
                </Routes>
                
            </BrowserRouter>
        </div>
    )
}

export default App;
