import React from "react";
import "./App.css";
import Chart from "./Chart";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        React Employee Drag and Drop Chart
        <span className="follow">
          <a href="https://twitter.com/gowthams88830  ">
            <img
              alt="Follow @naveenda_"
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
            />
            Follow @gowtham_selvaraj_
          </a>
        </span>
      </div>
      <div className="container">
        <Chart />
      </div>
    </div>
  );
}
