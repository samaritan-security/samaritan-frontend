import React from "react";
import { Typography } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './login.css'

const { Title } = Typography;

class Login extends React.Component {
  render() {
    return (
      <>
      <Title className="title"> Samaritan Security </Title>

        <div className="login" >
          <Input placeholder="Username" style={{marginBottom: 10, }}/>
          <Input.Password placeholder="Password" style={{marginBottom: 10, }}/>
          <Checkbox style={{marginBottom: 10, }} >Remember me</Checkbox>
          <a className="login-form-forgot" href="" style={{marginBottom: 10, }}>
            Forgot password
          </a>
          <Button type="primary" block>
            Login
          </Button>
        </div>

      </>
    );
  }
}

export default Login;
