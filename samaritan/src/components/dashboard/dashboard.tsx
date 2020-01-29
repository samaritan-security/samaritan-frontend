import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Content, Sider } = Layout;

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
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Icon type="appstore" />
                <span>Dashboard</span>
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
            <Content style={{ margin: "0 16px" }}>Content</Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default Dashboard;
