import "./App.css";
import Dictionary from "./Dictionary";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container"> </div>
      <header className="App-header text-center m-5">
        <h1>My dictionary app</h1>
      </header>
      <div className="container">
        <Dictionary defaultKeyWord="Welcome" />
      </div>

      <footer className="text-center">
        <p>
          {" "}
          This project was coded by{" "}
          <a
            href="https://portfolio-adrianaj.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Adriana Janockova{" "}
          </a>{" "}
          and is on{" "}
          <a
            href="https://github.com/Adriana-Aki"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://github.com/Adriana-Aki"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify{" "}
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
