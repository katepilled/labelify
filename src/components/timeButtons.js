import React from "react";
import "../styles/buttons.css";
import { useState } from "react";

const TimeButtons = ({ timeRange, setTimeRange }) => {
  return (
    <div class="d-flex flex-row justify-content-center align-items-center">
      <button
        class={`btn px-2 me-2 time-button ${
          timeRange === "short" ? "active" : ""
        }`}
        onClick={() => setTimeRange("short")}
      >
        past month
      </button>
      <button
        class={`btn me-2 time-button ${
          timeRange === "medium" ? "active" : ""
        }`}
        onClick={() => setTimeRange("medium")}
      >
        past 6 months
      </button>
      <button
        class={`btn px-2 time-button ${
          timeRange === "long" ? "active" : ""
        }`}
        onClick={() => setTimeRange("long")}
      >
        all time
      </button>
    </div>
  );
};
export default TimeButtons;
