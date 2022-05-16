import React from "react";
import ReactDOM from "react-dom";

import MyApp from "./MyApp";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <MyApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// For some reason this just works on full screen in codesandbox. 🚀
// Click on "Open in New Window" 🚀
