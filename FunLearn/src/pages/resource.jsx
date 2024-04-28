import React, { useState } from 'react';
import Header from '../components/header';
import qs from 'qs';
import SerpApi from 'google-search-results-nodejs';

function Resources() {
    
    const [query, setQuery] = useState('');
    async function click() {
    const search = new SerpApi.GoogleSearch("3a5b0ea7f3cf2d6346caa37323b0d3beff2b958b8cd07adf56d089404b4b29de");

    const params = {
    engine: "google",
    q: query,
    location: "India",
    google_domain: "google.com",
    gl: "us",
    hl: "en"
    };


    // Show result as JSON
    // Show result as JSON
    
    const queryString = new URLSearchParams(params).toString();
    search.json(params, function(data) {
            console.log(data);
        });

        
    
    }

    return (
        <>
            <Header />
            <h1 className="main">
                <span className="mid-title">Resources</span>
                <span className="subtitle">Here are some resources to help you learn better</span>
                <br />
                <input type="text" placeholder="Search for resources" value={query} onChange={e => setQuery(e.target.value)} />
                <button onClick={click}>Search</button>
                <ul>
                
                </ul>
            </h1>
        </>
    );
}

export default Resources;