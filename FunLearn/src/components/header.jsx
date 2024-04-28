import React from "react";
import '../App.css';
import {Link}  from "react-router-dom";

function Header() { 
    return (
        
        <nav>
          <ul className="sora">
          <Link to="/"><li>Home</li></Link>
            <li>Features</li>
            <li>Github</li>
          </ul>
        </nav>
    );
}
export default Header;