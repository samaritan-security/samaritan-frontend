import React from "react";
import { Typography } from "antd";
import { Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import "./login.css";
import { LoginHandler } from "../../api/login-handler";

const { Title } = Typography;

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
        <Title className="title"> Samaritan Security </Title>

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
          <Checkbox style={{ marginBottom: 10 }}>Remember me</Checkbox>
          <a className="login-form-forgot" style={{ marginBottom: 10 }}>
            Forgot password
          </a>
          <Button type="primary" onClick={this.login} block>
            Login
          </Button>
        </div>
      </>
    );
  }
}

export default Login;
