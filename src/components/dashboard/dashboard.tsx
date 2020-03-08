import React from "react";
import { Layout, Menu, Icon, Avatar, Alert } from "antd";
import IdentificationList from "../identificationList/identificationList";
import VideoStream from "../videoStream/videoStream";

const { Content, Sider, Header } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false
  };
  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="appstore" />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item>
                <Icon type="bell" />
                <span>Alerts</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="search" />
                <span>Search</span>
              </Menu.Item>

              <Menu.Item key="9">
                <Icon type="setting" />
                <span>Settings</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <div style={{ float: "right", marginRight: 20 }}>
                <Avatar icon="user" />
              </div>
            </Header>
            <Content style={{ margin: "0 16px", display: "" }}>
              <div style={{ float: "left", display: "inline" }}>
                <VideoStream ip="192.168.1.122" />
              </div>
              <div className="alertPopup">
                <div>
                  <Alert message="Warning" type="error" showIcon />
                  <Alert
                    message="Warning"
                    description="This is an alert for Samaritan Security."
                    type="error"
                    showIcon
                  />
                </div>
              </div>
              <div style={{ float: "left", display: "inline" }}>
                <IdentificationList type="known" title="Recognized" />
              </div>
              <div style={{ float: "left", display: "inline" }}>
                <IdentificationList type="unknown" title="Unknown" />
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default Dashboard;
