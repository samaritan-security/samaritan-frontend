import React from "react";
import VideoStream from "../../components/videoStream/videoStream";
import IdentificationList from "../../components/identificationList/identificationList";
import { Camera } from "../../api/api-types";
import NewIdentificationList from "../../components/identificationList/newIdentificationList";

interface ICameraInfoProps {
  camera: Camera; //id, ip, nickname
  startTime: string;
}
interface ICameraInfoState {}
class CameraInfo extends React.Component<ICameraInfoProps, ICameraInfoState> {
  render() {
    const { camera, startTime } = this.props;
    return (
      <>
        <div style={{ width: 1000, display: "block" }}>
          <div
            style={{
              display: "inline-block",
              width: 450,
              marginRight: 5
            }}
          >
            <VideoStream ip={camera.ip} />
          </div>
          <div
            style={{
              display: "inline-block",
              width: 400,
              marginLeft: 5,
              marginRight: 20,
              float: "right"
            }}
          >
            <NewIdentificationList camera={camera} startTime={startTime} />
          </div>
        </div>
      </>
    );
  }
}

export default CameraInfo;
