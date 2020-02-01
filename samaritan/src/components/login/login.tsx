import React from "react";
import { Input } from 'antd';
import { Button } from 'antd';
import { Typography } from 'antd';
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
          <Button type="primary" block>
            Login
          </Button>
        </div>

      </>
    );
  }
}

export default Login;
