import React from "react";
import Title from "../components/title";
import "../styles/buttons.css";

function Songs() {
  const buttonStyle = {
    backgroundColor: "#1db954",
    color: "white",
    border: "none",
    width: "160px",
  };

  return (
    <div>
      <Title pageName="top tracks" />
      <div className="d-flex flex-row justify-content-center align-items-center">
        <button className="btn px-2 me-2 time-button">past month</button>
        <button className="btn me-2 time-button">past 6 months</button>
        <button className="btn px-2 time-button">all time</button>
      </div>
    </div>
  );
}
export default Songs;
