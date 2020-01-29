import React from "react";
import { Layout, Menu, Icon } from "antd";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

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
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>Option 3</span>
                  </span>
                }
              >
                <Menu.Item key="3">1</Menu.Item>
                <Menu.Item key="4">2</Menu.Item>
                <Menu.Item key="5">3</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Option 4</span>
                  </span>
                }
              >
                <Menu.Item key="6">1</Menu.Item>
                <Menu.Item key="8">2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>Option 5</span>
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
