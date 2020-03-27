import React, { ChangeEvent } from "react";
import { Tabs, Card, Input, Button } from "antd";
import { CameraHandler } from "../../api/camera-handler";

const { TabPane } = Tabs;

class Settings extends React.Component {
  state = {
    nickname: "",
    ip: ""
  };

  addNewCamera = () => {
    const { nickname, ip } = this.state;
    new CameraHandler().addNewCamera(nickname, ip);
    this.setState({
      nickname: "",
      ip: ""
    });
  };
  updateNickname = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      nickname: e.target.value
    });
  };
  updateIP = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ip: e.target.value
    });
  };
  render() {
    return (
      <>
        <Tabs>
          <TabPane tab="Camera Settings" key="1">
            <Card title="Add New Camera" bordered={true}>
              <Input
                placeholder="Camera Nickname"
                style={{ width: 400, margin: 10 }}
                value={this.state.nickname}
                onChange={this.updateNickname}
              />
              <Input
                placeholder="Camera IP"
                style={{ width: 400, margin: 10 }}
                value={this.state.ip}
                onChange={this.updateIP}
              />
              <Button type="primary" onClick={this.addNewCamera}>
                Submit
              </Button>
            </Card>
          </TabPane>
          <TabPane tab="Recognition Settings" key="2">
            <Card title="Add New Person" bordered={true}>
              hi
            </Card>
          </TabPane>
          <TabPane tab="User Settings" key="3">
            <Card title="Change Password" bordered={true}>
              passWord
            </Card>
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default Settings;
