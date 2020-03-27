import React from "react";
import { Layout, Menu, Icon, Avatar, Typography } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AlertPage from "../alertPage/alertPage";
import HomePage from "../homePage/homePage";
import { CameraHandler } from "../../api/camera-handler";
import logo from "./logo.png";
import Settings from "../settings/settings";

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
        <Router>
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
                  <Link to="/" />
                </Menu.Item>
                <Menu.Item>
                  <Icon type="bell" />
                  <span>Alerts</span>
                  <Link to="/alerts" />
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="search" />
                  <span>Search</span>
                  <Link to="/" />
                </Menu.Item>

                <Menu.Item key="9">
                  <Icon type="setting" />
                  <span>Settings</span>
                  <Link to="/settings" />
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: "#fff", padding: 0 }}>
                <div>
                  <img
                    src={logo}
                    height="60"
                    width="283"
                    style={{
                      float: "left",
                      marginLeft: "41%",
                      marginBottom: "10"
                    }}
                  />
                </div>
                <div
                  style={{
                    float: "right",
                    marginRight: "10px",
                    display: "inline"
                  }}
                >
                  <Avatar icon="user" />
                </div>
              </Header>
              <Content style={{ margin: "16px 16px 16px 16px", display: "" }}>
                <Route
                  exact
                  path="/alerts"
                  render={props => (
                    <AlertPage
                      {...props}
                      startTime={"Wed, 26 Feb 2020 18:23:27 GMT"}
                    />
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={props => <HomePage handler={new CameraHandler()} />}
                />
                <Route exact path="/settings" render={props => <Settings />} />
              </Content>
            </Layout>
          </Layout>
        </Router>
      </>
    );
  }
}

export default Dashboard;
