import React from "react";
import { Typography } from "antd";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
import "./orgLogin.css";
import { LoginHandler } from "../../api/login-handler";

const { Title } = Typography;

interface IOrgLoginProps {
  dnsResponse: (ip: string) => void;
}
interface IOrgLoginState {
  organizationName: string;
  organizationIP: string;
}
class OrgLogin extends React.Component<IOrgLoginProps, IOrgLoginState> {
  state = {
    organizationName: "",
    organizationIP: "",
  };
  sendDNSQuery = () => {
    const { organizationName } = this.state;
    new LoginHandler().getOrganizationIP(organizationName).then((ip) => {
      this.setState({
        organizationIP: ip["ip"],
      });
      this.props.dnsResponse(ip["ip"]);
    });
  };
  setText = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      organizationName: e.target.value,
    });
  };
  render() {
    return (
      <>
        <Title className="title"> Organization Login </Title>

        <div className="login">
          <Input
            placeholder="Organization Name"
            onChange={this.setText}
            style={{ marginBottom: 10 }}
          />
          <Button type="primary" onClick={this.sendDNSQuery} block>
            Submit
          </Button>
        </div>
      </>
    );
  }
}

export default OrgLogin;
