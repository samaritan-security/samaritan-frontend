import React from "react";
import VideoStream from "../videoStream/videoStream";
import IdentificationList from "../identificationList/identificationList";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <div style={{ float: "left", display: "inline" }}>
          <VideoStream ip="192.168.1.122" />
        </div>
        <div style={{ float: "left", display: "inline" }}>
          <IdentificationList type="known" title="Recognized" />
        </div>
        <div style={{ float: "left", display: "inline" }}>
          <IdentificationList type="unknown" title="Unknown" />
        </div>
      </>
    );
  }
}

export default HomePage;
