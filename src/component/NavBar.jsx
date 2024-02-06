import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const stylesLink ={
        padding :"15px",
        border :"solid"
    }
    return(
        <div id ='NavBar' >
            
            <NavLink to ='/contact'className="NavLink">contact</NavLink>
            <NavLink to ='/about'className="NavLink">about</NavLink>
            <NavLink to ='/'className="NavLink"> Home</NavLink>
     </div>
    ) 
    
}
export default NavBar