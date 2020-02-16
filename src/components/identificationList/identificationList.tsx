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
    setInterval(() => {
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
      else {
        new UnknownHandler().getAllUnknown().then(data => {
          this.setState({
            unknown: data
          });
        });
      }
    }, 1000);
    return () => clearInterval();
  };

  getKnownRow = (known: Known) => {
    let img = "data:image/jpeg;charset=utf-8;base64, " + known.img;
    console.log(img);

    return (
      <div style={{ display: "block" }}>
        <Avatar
          icon="user"
          style={{ display: "inline-block", margin: 10 }}
          src={img}
        />
        <p style={{ display: "inline-block" }}>{known.name}</p>
      </div>
    );
  };

  getUnknownRow = (unknown: Unknown) => {
    let img = "data:image/jpeg;charset=utf-8;base64, " + unknown.img;

    return (
      <div style={{ display: "block" }}>
        <Avatar
          icon="user"
          size={64}
          style={{ display: "inline-block", marginTop: 10, marginLeft: 30 }}
          src={img}
        />
      </div>
    );
  };

  getKnownList = (data: Known[]) => {
    return <>{data.map(known => this.getKnownRow(known))}</>;
  };

  getUnknownList = (data: Unknown[]) => {
    return <>{data.map(unknown => this.getUnknownRow(unknown))}</>;
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
