import React from "react";
import '../App.css';
import {Link}  from "react-router-dom";

function Header() { 
    return (
      <>
        <nav>
          <ul className="sora">
          <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
          <Link to="/" className="link"><li>Home &nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
          <Link to="features" className="link"><li>Features &nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
          <Link to="https://github.com/srivanik8/FunLearn" className="link"><li>Github &nbsp;&nbsp;&nbsp;&nbsp;</li></Link>
          </ul>
        </nav>
    </>  
    );
}
export default Header;