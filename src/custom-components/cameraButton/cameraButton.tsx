import React from "react";
import { Camera } from "../../api/api-types";
import { Card, Modal, Button } from "antd";
import CameraInfo from "../cameraInfo/cameraInfo";

interface ICameraButtonProps {
  camera: Camera;
}
interface ICameraButtonState {
  modal: boolean;
}

class CameraButton extends React.Component<
  ICameraButtonProps,
  ICameraButtonState
> {
  state = {
    modal: false
  };
  toggleExtra = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  };
  render() {
    const { camera } = this.props;
    let source = "http://" + camera.ip + "/video.mjpg";
    return (
      <>
        <Card
          size="small"
          title={camera.nickname}
          style={{ width: 300 }}
          extra={
            <Button
              shape="circle"
              icon="arrows-alt"
              onClick={this.toggleExtra}
            />
          }
        >
          <img src={source} width="270" height="200" />
        </Card>
        <Modal
          visible={this.state.modal}
          footer={null}
          title={camera.nickname}
          onCancel={this.toggleExtra}
          width={700}
        >
          <CameraInfo camera={camera} />
        </Modal>
      </>
    );
  }
}

export default CameraButton;
