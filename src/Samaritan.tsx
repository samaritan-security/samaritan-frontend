import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import OrgLogin from "./components/orgLogin/orgLogin";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";

interface ISamaritanProps {}
interface ISamaritanState {
  orgIP: string;
  loggedIn: boolean;
}

class Samaritan extends React.Component<ISamaritanProps, ISamaritanState> {
  state = {
    orgIP: "",
    loggedIn: false,
  };
  setOrgIP = (ip: string) => {
    console.log(ip);
    this.setState({
      orgIP: ip,
    });
  };
  setLoggedIn = (value: boolean) => {
    this.setState({
      loggedIn: value,
    });
  };
  render() {
    const { orgIP, loggedIn } = this.state;
    if (orgIP == "") {
      return <OrgLogin dnsResponse={this.setOrgIP} />;
    } else if (loggedIn == false) {
      return <Login ip={orgIP} loginResponse={this.setLoggedIn} />;
    } else {
      return <Dashboard />;
    }
  }
}

export default Samaritan;
