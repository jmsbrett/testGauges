import React from "react";
import Gauge from "./features/gauge/Gauge";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Gauge sysInfo="CPU" />
      <Gauge sysInfo="RAM" />
      <Gauge sysInfo="GPU" />
    </div>
  );
}

export default App;
