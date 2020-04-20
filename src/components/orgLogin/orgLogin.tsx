import React from "react";
import { Typography, Card } from "antd";
import { Input, Button } from "antd";
import { LoginHandler } from "../../api/login-handler";
import "./orgLogin.css";
import logo from "../../logo.png";
import title from "./title.png";

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
        <div
          style={{
            backgroundColor: "#4477BE",
            height: "100vh",
            width: "100vw",
          }}
        >
          <div className="logo" style={{ display: "block" }}>
            <div style={{ display: "block" }}>
              <img src={logo} alt="unavailable" />
            </div>
            <div style={{ display: "block", paddingLeft: 40 }}>
              <img src={title} alt="unavailable" />
            </div>
          </div>

          <div className="login" style={{ display: "block" }}>
            <Input
              placeholder="Organization Name"
              onChange={this.setText}
              style={{ marginBottom: 10 }}
            />
            <Button type="primary" onClick={this.sendDNSQuery} block>
              Contine
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default OrgLogin;
