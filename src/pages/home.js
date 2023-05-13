import React from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import Login from "../components/login";

function Home(){

    return (
        <div>
            <div className="d-flex flex-column align-items-center my-5">
            <h1 className="text-center mb-3">welcome to label.ify!</h1>
            <Login />
            
            </div>
        </div>
    )

}

export default Home;