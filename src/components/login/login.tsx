import React from "react";
import { Typography } from "antd";
import { Input, Button } from "antd";
import "./login.css";
import logo from "../../logo.png";
import title from "../orgLogin/title.png";
import { LoginHandler } from "../../api/login-handler";

interface ILoginProps {
  ip: string;
  loginResponse: (value: boolean) => void;
}
interface ILoginState {
  username: string;
  password: string;
}

class Login extends React.Component<ILoginProps, ILoginState> {
  state = {
    username: "",
    password: "",
  };
  setUsernameText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: e.target.value,
    });
  };
  setPasswordText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: e.target.value,
    });
  };
  login = () => {
    const { username, password } = this.state;
    const { ip } = this.props;
    new LoginHandler().login(ip, username, password).then((value: boolean) => {
      this.props.loginResponse(value);
    });
  };
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#4477BE",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div className="title" style={{ display: "block" }}>
            <div style={{ display: "block" }}>
              <img src={logo} alt="unavailable" />
            </div>
            <div style={{ display: "block", paddingLeft: 40 }}>
              <img src={title} alt="unavailable" />
            </div>
          </div>

          <div className="login">
            <Input
              onChange={this.setUsernameText}
              placeholder="Username"
              style={{ marginBottom: 10 }}
            />
            <Input.Password
              onChange={this.setPasswordText}
              placeholder="Password"
              style={{ marginBottom: 10 }}
            />

            <Button type="primary" onClick={this.login} block>
              Login
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
