import React from "react";
import { Avatar, Typography } from "antd";

const { Title } = Typography;

interface IIdentificationListProps {
  type: string;
  title?: string;
}

interface IIdentificationListState {
  data: string[];
}

class IdentificationList extends React.Component<
  IIdentificationListProps,
  IIdentificationListState
> {
  state = {
    data: []
  };

  componentDidMount = () => {
    const { type } = this.props;

    //if this list displays known people, make request to fetch
    //names here. for now just hardcoded until endpoint set up
    if (type == "known") {
      let list = ["Kate Brune", "Ryan Goluch", "Jorden Lee", "Sam Kennedy"];
      this.setState({
        data: list
      });
    }
    //otherwise, this list displays unknown faces, get those pictures.
    //for now just hardcoded bc don't have endpoint set up
    else {
      //nothing for now
    }
  };

  getKnownRow = (name: string) => {
    return (
      <div style={{ display: "block" }}>
        <Avatar icon="user" style={{ display: "inline-block", margin: 10 }} />
        <p style={{ display: "inline-block" }}>{name}</p>
      </div>
    );
  };

  getUnknownRow = () => {
    return (
      <div style={{ display: "block" }}>
        <Avatar
          icon="user"
          size={64}
          style={{ display: "inline-block", marginTop: 10, marginLeft: 30 }}
        />
      </div>
    );
  };

  getKnownList = (data: string[]) => {
    return <>{data.map(name => this.getKnownRow(name))}</>;
  };

  getUnknownList = () => {
    //hardcoded rn, need to map eventually
    return (
      <>
        {this.getUnknownRow()}
        {this.getUnknownRow()}
        {this.getUnknownRow()}
      </>
    );
  };
  render() {
    const { data } = this.state;
    const { title, type } = this.props;
    return (
      <>
        <Title level={4} style={{ margin: 20 }}>
          {title}
        </Title>
        {type == "known" ? this.getKnownList(data) : this.getUnknownList()}
      </>
    );
  }
}

export default IdentificationList;
