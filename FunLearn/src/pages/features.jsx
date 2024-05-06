import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

function Features() {
    return (
        <>
        <Header />
            <br />
            <br />
            <br />
            <br />
            <h1 className="main">
                <span className="title"> Features </span>
                <span className="flex-row">
                <Link to="/tts"><button className="btn" style={{backgroundColor: '#8987f4'}}>AI whisper</button></Link>
                <Link to="/quizify"><button className="btn" style={{backgroundColor: '#8987f4'}}>Quizify</button></Link>
            </span>
            </h1>
        </>  
    );
}

export default Features;