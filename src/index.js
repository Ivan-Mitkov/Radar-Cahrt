import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import "./styles.css";

function App() {
  const WIDTH = 350;
  const HIGHT = 350;
  return (
    <div className="App" style={{}}>
      <div
        style={{
          // background: "pink",
          margin: "10px",
          padding: "12px",
          // opacity: "0.8",
          // diplsay: "flex",
          // alignItems: "center",
          // justifyContent: "flex-start",
          width: WIDTH,
          height: HIGHT
        }}
      >
        <Demo width={WIDTH} height={HIGHT} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
