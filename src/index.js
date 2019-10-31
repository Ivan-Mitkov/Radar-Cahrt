import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import "./styles.css";

function App() {
  return (
    <div className="App" style={{}}>
      <div
        style={{
          background: "pink",
          margin: "10px",
          padding: "12px",

          diplsay: "flex",
          alignItems: "center",
          justifyContent: "center"
          // zIndex: 100
        }}
      >
        <Demo width={350} height={350} style={{ }} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
