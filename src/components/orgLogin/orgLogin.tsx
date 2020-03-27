import React from "react";
import { Typography } from 'antd';
import { Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './orgLogin.css'

const { Title } = Typography;

class orgLogin extends React.Component {
  render() {
    return (
      <>
      <Title className="title"> Organization Login </Title>

        <div className="login" >
          <Input placeholder="Organization Name" style={{marginBottom: 10, }}/>
          <Button type="primary" block>
            Submit
          </Button>
        </div>

      </>
    );
  }
}

export default orgLogin;
