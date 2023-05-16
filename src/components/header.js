import React from "react";
import "../styles/buttons.css";
import { logout } from "../spotify";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand ms-4" href="/">
        label.ify
      </a>
      <div className="d-flex pe-2">
        {isLoggedIn ? (
          <div>
            <Link to="/top-tracks" className="btn header-button me-2">
              top tracks
            </Link>
            <Link to="/top-artists" className="btn header-button me-2">
              top artists
            </Link>
            <button className="btn header-button me-2" onClick={logout}>
              log out
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
