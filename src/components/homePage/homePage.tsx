import React from "react";
import { Camera } from "../../api/api-types";
import { CameraHandler } from "../../api/camera-handler";
import CameraButton from "../../custom-components/cameraButton/cameraButton";

interface IHomePageProps {
  handler: CameraHandler;
}
interface IHomePageState {
  cameras: Camera[];
}
class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  state = {
    cameras: []
  };
  componentDidMount = () => {
    const { handler } = this.props;
    handler.getCameras().then(data => {
      this.setState({
        cameras: data
      });
    });
  };
  render() {
    const { cameras } = this.state;
    return (
      <>
        <div style={{ width: "100%", display: "table" }}>
          {cameras.map(camera => (
            <div style={{ display: "table-cell" }}>
              <CameraButton camera={camera} />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default HomePage;
