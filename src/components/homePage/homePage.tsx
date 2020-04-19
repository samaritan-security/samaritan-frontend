import React from "react";
import { Camera } from "../../api/api-types";
import { CameraHandler } from "../../api/camera-handler";
import CameraButton from "../../custom-components/cameraButton/cameraButton";

interface IHomePageProps {
  handler: CameraHandler;
  ip: string;
}
interface IHomePageState {
  cameras: Camera[];
}
class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  state = {
    cameras: [],
  };
  componentDidMount = () => {
    const { handler } = this.props;
    handler.getCameras().then((data) => {
      this.setState({
        cameras: data,
      });
    });
  };
  render() {
    const { cameras } = this.state;
    const { ip } = this.props;
    return (
      <>
        <div style={{ width: "100%", display: "table" }}>
          {cameras.map((camera) => (
            <div style={{ display: "table-cell" }}>
              <CameraButton
                startTime={"Thu, 26 Mar 2020 20:09:10 GMT"}
                camera={camera}
                ip={ip}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default HomePage;
