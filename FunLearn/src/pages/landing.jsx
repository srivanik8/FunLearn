import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";
import "../App.css";

function Landing() {
    return (
        <div className="box">
            <Header />
            <br />
            <br />
            <br />
            <br />
            <h1 className="main">
                <span className="title"> FunLearn </span>
                <span className="subtitle"> Ditch your boring textbooks & learn with FunLearn</span>
                <span><Link to="/tts"><button className="btn">Get Started

                </button></Link></span>
            </h1>
            
        </div>
    );
}
export default Landing;