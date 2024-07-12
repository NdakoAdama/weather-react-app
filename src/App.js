import React from "react";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="Container">
      <h1>Weather</h1>
      <footer>
        This project was coded by Ndako Adama and is open sourced on{" "}
        <a
          href="https://github.com/NdakoAdama/weather-react-app"
          target="_blank"
        >
          Github
        </a>{" "}
        and hosted on
        <a href="https://weatherapprct.netlify.app" target="_blank">
          {" "}
          netlify.
        </a>
      </footer>
      </div>
    </div>
  );
}
