import React from "react";
import VideoStream from "../../components/videoStream/videoStream";
import IdentificationList from "../../components/identificationList/identificationList";
import { Camera } from "../../api/api-types";

interface ICameraInfoProps {
  camera: Camera; //id, ip, nickname
}
interface ICameraInfoState {}
class CameraInfo extends React.Component<ICameraInfoProps, ICameraInfoState> {
  render() {
    const { camera } = this.props;
    return (
      <>
        <div style={{ width: 700, display: "table" }}>
          <div style={{ display: "table-cell" }}>
            <VideoStream ip={camera.ip} />
          </div>
          <div style={{ display: "table-cell" }}>
            <IdentificationList
              type="known"
              title="Recognized"
              cameraID={camera._id}
            />
          </div>
          <div style={{ display: "table-cell" }}>
            <IdentificationList
              type="unknown"
              title="Unknown"
              cameraID={camera._id}
            />
          </div>
        </div>
      </>
    );
  }
}

export default CameraInfo;
