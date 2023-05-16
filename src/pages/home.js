import React from "react";
import "../styles/buttons.css";
import { Link } from "react-router-dom";

const Home = ({ isLoggedIn }) => {

  return (
    <div>
      <div class="d-flex flex-column align-items-center my-5">
        <h1 class="text-center mb-3">welcome to label.ify!</h1>
        <div>
          {isLoggedIn ? (
            <div class="d-flex flex-row justify-content-center align-items-center">
              <Link to="/top-tracks" class="btn me-2 time-button">
                top tracks
              </Link>
              <Link to="/top-artists" class="btn px-2 time-button">
                top artists
              </Link>
            </div>
          ) : (
            <a
              class="btn btn-lg login-button"
              href="http://localhost:8888/login"
            >
              login to spotify
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
