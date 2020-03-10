import React from "react";
import { Avatar, Typography } from "antd";
import { KnownHandler } from "../../api/known-handler";
import { UnknownHandler } from "../../api/unknown-handler";
import { Known, Unknown, Person } from "../../api/api-types";
import { SeenHandler } from "../../api/seen-handler";

const { Title } = Typography;

interface IIdentificationListProps {
  type: string;
  title?: string;
}

interface IIdentificationListState {
  people: Person[];
  startTime: string;
}

class IdentificationList extends React.Component<
  IIdentificationListProps,
  IIdentificationListState
> {
  state = {
    people: [],
    startTime: new Date().toUTCString()
  };

  componentDidMount = () => {
    this.setState({
      startTime: new Date().toUTCString()
    });
    setInterval(() => {
      const { type } = this.props;
      const { startTime } = this.state;
      let endTime = new Date().toUTCString();

      //if this list displays known people, make request to fetch
      //names/pics here.
      new SeenHandler().getAllPeople(startTime, endTime).then(data => {
        this.setState({});
      });
    }, 3000);
    return () => clearInterval();
  };

  getKnownRow = (known: Person) => {
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

  getUnknownRow = (unknown: Person) => {
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

  getKnownList = (data: Person[]) => {
    return (
      <>
        {data.map(known => {
          if (known.known) {
            return this.getKnownRow(known);
          }
        })}
      </>
    );
  };

  getUnknownList = (data: Person[]) => {
    return (
      <>
        {data.map(unknown => {
          if (!unknown.known) {
            return this.getUnknownRow(unknown);
          }
        })}
      </>
    );
  };
  render() {
    const { people } = this.state;
    const { title, type } = this.props;
    return (
      <>
        <Title level={4} style={{ margin: 20 }}>
          {title}
        </Title>
        {type == "known"
          ? this.getKnownList(people)
          : this.getUnknownList(people)}
      </>
    );
  }
}

export default IdentificationList;
