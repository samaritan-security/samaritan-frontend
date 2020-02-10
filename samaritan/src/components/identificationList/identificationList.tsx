import React from "react";
import { Avatar, Typography } from "antd";
import { KnownHandler } from "../../api/known-handler";
import { UnknownHandler } from "../../api/unknown-handler";
import { Known, Unknown } from "../../api/api-types";

const { Title } = Typography;

interface IIdentificationListProps {
  type: string;
  title?: string;
}

interface IIdentificationListState {
  known: Known[];
  unknown: Unknown[];
}

class IdentificationList extends React.Component<
  IIdentificationListProps,
  IIdentificationListState
> {
  state = {
    known: [],
    unknown: []
  };

  componentDidMount = () => {
    const { type } = this.props;

    //if this list displays known people, make request to fetch
    //names/pics here.
    if (type == "known") {
      new KnownHandler().getAllKnown().then(data => {
        this.setState({
          known: data
        });
      });
    }
    //otherwise, this list displays unknown faces, get those pictures.
    //for now just hardcoded bc don't have endpoint set up
    else {
      new UnknownHandler().getAllUnknown().then(data => {
        this.setState({
          unknown: data
        });
      });
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

  getKnownList = (data: Known[]) => {
    return <>{data.map(known => this.getKnownRow(known.name))}</>;
  };

  getUnknownList = (data: Unknown[]) => {
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
    const { known, unknown } = this.state;
    const { title, type } = this.props;
    return (
      <>
        <Title level={4} style={{ margin: 20 }}>
          {title}
        </Title>
        {type == "known"
          ? this.getKnownList(known)
          : this.getUnknownList(unknown)}
      </>
    );
  }
}

export default IdentificationList;
