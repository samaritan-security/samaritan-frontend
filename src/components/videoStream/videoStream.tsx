import React from "react";

interface IVideoStreamProps {
  ip: string;
}

interface IVideoStreamState {
  source: string;
}

class VideoStream extends React.Component<
  IVideoStreamProps,
  IVideoStreamState
> {
  state = {
    source: "",
  };

  componentDidMount = () => {
    const { ip } = this.props;
    let source = "http://" + ip + "/video.mjpg";
    this.setState({
      source: source,
    });
  };

  render() {
    const { source } = this.state;
    return (
      <>
        <img src={source} alt="unavailable" />
      </>
    );
  }
}

export default VideoStream;
