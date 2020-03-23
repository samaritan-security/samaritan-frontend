import React from "react";
import CameraInfo from "../../custom-components/cameraInfo/cameraInfo";
import { Camera } from "../../api/api-types";
import { CameraHandler } from "../../api/camera-handler";

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
    return cameras.map(camera => <CameraInfo camera={camera} />);
  }
}

export default HomePage;
