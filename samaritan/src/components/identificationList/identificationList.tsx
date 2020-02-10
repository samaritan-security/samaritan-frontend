import React from "react";
import { Avatar } from "antd";

interface IIdentificationListProps {}

interface IIdentificationListState {
  names: string[];
}
class IdentificationList extends React.Component<
  IIdentificationListProps,
  IIdentificationListState
> {
  state = {
    names: []
  };
  componentDidMount = () => {
    //make request to fetch names here
    //for now just hardcoded until endpoint set up
    let list = ["Kate Brune", "Ryan Goluch", "Jorden Lee", "Sam Kennedy"];
    this.setState({
      names: list
    });
  };
  getRow = (name: string) => {
    return (
      <div style={{ display: "block" }}>
        <Avatar icon="user" style={{ display: "inline-block", margin: 10 }} />
        <p style={{ display: "inline-block" }}>{name}</p>
      </div>
    );
  };

  render() {
    const { names } = this.state;
    return <>{names.map(name => this.getRow(name))}</>;
  }
}

export default IdentificationList;
