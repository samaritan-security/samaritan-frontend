import React from "react";
import { SeenHandler } from "../../api/seen-handler";
import { Camera, Person } from "../../api/api-types";
import ReactList from "react-list";
import { Avatar } from "antd";
import ActionRequest from "../../custom-components/actionRequest/actionRequest";

interface INewIdentificationListProps {
  camera: Camera;
  startTime: string;
}
interface INewIdentificationListState {
  data: Person[];
}
class NewIdentificationList extends React.Component<
  INewIdentificationListProps,
  INewIdentificationListState
> {
  state = {
    data: []
  };

  componentWillMount = () => {
    const { camera, startTime } = this.props;
    let endTime = new Date().toUTCString();
    new SeenHandler()
      .getAllPeople(camera._id, startTime, endTime)
      .then((people: Person[]) => {
        this.handleData(people);
      });
  };

  handleData(data: Person[]) {
    this.setState({
      data: data
    });
  }

  renderItem(index: number, key: string | number) {
    let person: Person = this.state.data[index];
    let img = "data:image/jpeg;charset=utf-8;base64, " + person.img;
    return (
      <>
        <div style={{ display: "block", width: 350 }}>
          <Avatar
            icon="user"
            style={{ display: "inline-block", margin: 10 }}
            src={img}
          />
          <p style={{ display: "inline-block" }}>
            {person.known ? person.name : "Unknown"}
          </p>
          <div style={{ display: "inline-block", float: "right" }}>
            <ActionRequest id={person._id} />
          </div>
        </div>
      </>
    );
  }

  render() {
    return (
      <div>
        <h3>Recently Seen</h3>
        <div style={{ overflow: "auto", maxHeight: 500 }}>
          <ReactList
            itemRenderer={(item, key) => this.renderItem(item, key)}
            length={this.state.data.length}
            type="uniform"
          />
        </div>
      </div>
    );
  }
}

export default NewIdentificationList;
