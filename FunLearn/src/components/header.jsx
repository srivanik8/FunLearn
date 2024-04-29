import React from "react";
import '../App.css';
import {Link}  from "react-router-dom";

function Header() { 
    return (
        
        <nav>
          <ul className="sora">
          <Link to="/" className="link"><li>Home</li></Link>
          <Link to="features" className="link"><li>Features</li></Link>
          <Link to="https://github.com/srivanik8/FunLearn" className="link"><li>Github</li></Link>
          </ul>
        </nav>
    );
}
export default Header;