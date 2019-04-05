import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./nav-bar";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h3>
        <NavBar />
      </h3>
      <h3 className="NameTag">
        <b className="textColor">Leroy Hutchinson</b>
      </h3>
      <h1 className="start"> </h1>
      <div className="Intro" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
