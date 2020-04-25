import React from "react";
import { Typography, Table, Modal, Avatar, Spin } from "antd";
import { Alert, Person, Camera } from "../../api/api-types";
import { AlertHandler } from "../../api/alert-handler";
import ActionRequest from "../../custom-components/actionRequest/actionRequest";
import { PersonHandler } from "../../api/person-handler";
import { CameraHandler } from "../../api/camera-handler";

const { Title } = Typography;

interface IAlertPageProps {
  startTime: string;
  ip: string;
}
interface IAlertPageState {
  alerts: Alert[];
  visible: boolean;
  person: Person | undefined;
  camera: Camera | undefined;
}

class AlertPage extends React.Component<IAlertPageProps, IAlertPageState> {
  state = {
    alerts: [],
    visible: false,
    person: undefined,
    camera: undefined,
    loading: true,
  };

  componentDidMount = () => {
    setInterval(() => {
      const { startTime, ip } = this.props;
      let endTime = new Date().toUTCString();
      new AlertHandler(ip).getAlerts(startTime, endTime).then((data) => {
        this.setState({
          alerts: data,
        });
      });
    }, 3000);
    return () => clearInterval();
  };

  openDetailsModal = (record: any) => {
    const { ip } = this.props;
    new PersonHandler(ip).getById(record.ref_id).then((person: Person) => {
      this.setState({
        person: person,
      });
    });
    new CameraHandler(ip)
      .getCameraById(record.camera)
      .then((camera: Camera) => {
        this.setState({
          camera: camera,
        });
      });
    this.setState({
      visible: true,
    });
  };

  closeDetailsModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { alerts } = this.state;
    let img = "";
    if (this.state.person === undefined) {
      img = "";
    } else {
      img =
        "data:image/jpeg;charset=utf-8;base64, " + this.state.person!["img"];
    }
    let dataSource = alerts.map((element: Alert) => {
      return {
        key: element._id,
        ref_id: element.ref_id,
        time: element.time,
        camera: element.camera,
      };
    });

    const columns = [
      {
        title: "Alert",
        dataIndex: "ref_id",
        key: "ref_id",
      },
      {
        title: "Time",
        dataIndex: "time",
        key: "time",
      },
      {
        title: "Camera",
        dataIndex: "camera",
        key: "camera",
      },
    ];

    return (
      <>
        <Title level={3}>Alerts</Title>
        <Table
          dataSource={dataSource}
          columns={columns}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                this.openDetailsModal(record);
              },
            };
          }}
        />
        <Modal
          title="Alert Details"
          visible={this.state.visible}
          onOk={this.closeDetailsModal}
          onCancel={this.closeDetailsModal}
        >
          {this.state.person !== undefined &&
          this.state.camera !== undefined ? (
            <div style={{ display: "block" }}>
              <Avatar
                icon="user"
                style={{ display: "inline-block", margin: 10 }}
                src={img}
                size={64}
              />
              <p style={{ display: "inline-block" }}>
                {this.state.person!["name"]}
              </p>
              <p style={{ display: "inline-block" }}>" seen at "</p>
              <p style={{ display: "inline-block" }}>
                {this.state.camera!["nickname"]}
              </p>
              <div
                style={{ display: "inline-block", float: "right", margin: 10 }}
              >
                <ActionRequest
                  ip={this.props.ip}
                  id={this.state.person!["_id"]}
                />
              </div>
            </div>
          ) : (
            <Spin />
          )}
        </Modal>
      </>
    );
  }
}

export default AlertPage;
