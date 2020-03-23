import React from "react";
import VideoStream from "../../components/videoStream/videoStream";
import IdentificationList from "../../components/identificationList/identificationList";
import { Camera } from "../../api/api-types";
import { Card } from "antd";

interface ICameraInfoProps {
  camera: Camera; //id, ip, nickname
}
interface ICameraInfoState {}
class CameraInfo extends React.Component<ICameraInfoProps, ICameraInfoState> {
  render() {
    return (
      <>
        <Card
          title={this.props.camera.nickname}
          bordered={true}
          style={{ width: 500 }}
        >
          <div style={{ float: "left", display: "inline" }}>
            <VideoStream ip={this.props.camera.ip} />
          </div>
          <div style={{ float: "left", display: "inline" }}>
            <IdentificationList type="known" title="Recognized" />
          </div>
          <div style={{ float: "left", display: "inline" }}>
            <IdentificationList type="unknown" title="Unknown" />
          </div>
        </Card>
      </>
    );
  }
}

export default CameraInfo;
