import React from "react";
import CameraInfo from "../../custom-components/cameraInfo/cameraInfo";
import { Camera } from "../../api/api-types";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <CameraInfo
          camera={new Camera({ _id: "0", nickname: "home", ip: "localhost" })}
        />
      </>
    );
  }
}

export default HomePage;
