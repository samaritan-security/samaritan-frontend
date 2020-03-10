import React from "react";
import { Typography, Table, Modal, Avatar } from "antd";
import { Alert, Person } from "../../api/api-types";
import { AlertHandler, MockAlertHandler } from "../../api/alert-handler";
import ActionRequest from "../../custom-components/actionRequest/actionRequest";
import { PersonHandler, MockPersonHandler } from "../../api/person-handler";

const { Title } = Typography;

interface IAlertPageProps {}
interface IAlertPageState {
  alerts: Alert[];
  startTime: string;
  visible: boolean;
  person: Person;
}

class AlertPage extends React.Component<IAlertPageProps, IAlertPageState> {
  state = {
    alerts: [],
    startTime: "",
    visible: false,
    person: new Person({})
  };

  componentDidMount = () => {
    this.setState({
      startTime: new Date().toUTCString()
    });
    setInterval(() => {
      const { startTime } = this.state;
      let endTime = new Date().toUTCString();
      // new AlertHandler().getAlerts(startTime, endTime).then(data => {
      //   this.setState({
      //     alerts : data
      //   })
      // })
      let response = new MockAlertHandler().getAlerts(startTime, endTime);
      this.setState({
        alerts: response
      });
    }, 3000);
    return () => clearInterval();
  };

  openDetailsModal = (record: any) => {
    // new PersonHandler().getById(record._id).then(person => {
    //   this.setState({
    //     visible: true,
    //     person: person
    //   });
    // });

    let person = new MockPersonHandler().getById(record._id);
    this.setState({
      visible: true,
      person: person
    });
  };

  closeDetailsModal = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { alerts } = this.state;
    let img = "data:image/jpeg;charset=utf-8;base64, " + this.state.person.img;
    let dataSource = alerts;

    const columns = [
      {
        title: "Alert",
        dataIndex: "_id",
        key: "_id"
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
          <div style={{ display: "block" }}>
            <Avatar
              icon="user"
              style={{ display: "inline-block", margin: 10 }}
              src={img}
              size={64}
            />
            <p style={{ display: "inline-block" }}>{this.state.person.name}</p>
            <div
              style={{ display: "inline-block", float: "right", margin: 10 }}
            >
              <ActionRequest id={this.state.person._id} />
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default AlertPage;
