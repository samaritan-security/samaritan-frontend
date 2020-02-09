import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import VideoStream from "./components/videoStream/videoStream";

const App: React.FC = () => {
  return (
    <>
      <VideoStream />
    </>
  );
};

export default App;
