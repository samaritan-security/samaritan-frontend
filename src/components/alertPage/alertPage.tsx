import React from "react";
import { Typography, Table, Modal, Avatar, Spin } from "antd";
import { Alert, Person } from "../../api/api-types";
import { AlertHandler, MockAlertHandler } from "../../api/alert-handler";
import ActionRequest from "../../custom-components/actionRequest/actionRequest";
import { PersonHandler, MockPersonHandler } from "../../api/person-handler";

const { Title } = Typography;

interface IAlertPageProps {
  startTime: string;
}
interface IAlertPageState {
  alerts: Alert[];
  visible: boolean;
  person: Person | undefined;
}

class AlertPage extends React.Component<IAlertPageProps, IAlertPageState> {
  state = {
    alerts: [],
    visible: false,
    person: undefined,
    loading: true
  };

  componentDidMount = () => {
    setInterval(() => {
      const { startTime } = this.props;
      let endTime = new Date().toUTCString();
      new AlertHandler().getAlerts(startTime, endTime).then(data => {
        this.setState({
          alerts: data
        });
      });
    }, 3000);
    return () => clearInterval();
  };

  openDetailsModal = (record: any) => {
    new PersonHandler().getById(record.ref_id).then((person: Person) => {
      this.setState({
        person: person
      });
    });
    this.setState({
      visible: true
    });
  };

  closeDetailsModal = () => {
    this.setState({
      visible: false
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
      return { key: element._id, ref_id: element.ref_id, time: element.time };
    });

    const columns = [
      {
        title: "Alert",
        dataIndex: "ref_id",
        key: "ref_id"
      },
      {
        title: "Time",
        dataIndex: "time",
        key: "time"
      }
    ];

    return (
      <>
        <Title level={3}>Alerts</Title>
        <Table
          dataSource={dataSource}
          columns={columns}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                this.openDetailsModal(record);
              }
            };
          }}
        />
        <Modal
          title="Alert Details"
          visible={this.state.visible}
          onOk={this.closeDetailsModal}
          onCancel={this.closeDetailsModal}
        >
          {this.state.person !== undefined ? (
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
              <div
                style={{ display: "inline-block", float: "right", margin: 10 }}
              >
                <ActionRequest id={this.state.person!["_id"]} />
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
