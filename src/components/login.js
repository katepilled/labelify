import React from "react";
import "../styles/buttons.css"

function Login() {
  const client_id = process.env.REACT_APP_CLIENT_ID; 
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;
  const auth_endpoint = "https://accounts.spotify.com/authorize";
  const response_type = "token";


  return (
    <a
      className="btn btn-lg login-button"
      href={`${auth_endpoint}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`}
    >
      login with spotify
    </a>
  );
}

export default Login;