import React from "react";
import "./homecrud.css";
import { Link } from 'react-router-dom'





const Homecrud = () => {
    return(
        <section className="nav">
            <Link to="/">CREATE-USERS</Link>
            <Link to="/users">USERS</Link>
        </section> 
    )
}

export default Homecrud;
