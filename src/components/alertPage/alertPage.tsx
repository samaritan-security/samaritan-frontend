import React from 'react'
import {Typography, Table} from 'antd'
import {Alert} from '../../api/api-types'
import { AlertHandler, MockAlertHandler } from '../../api/alert-handler'
import { AlertState } from 'antd/lib/alert'

const {Title} = Typography

interface IAlertPageProps {

}
interface IAlertPageState {
  alerts : Alert[],
  startTime : string
}

class AlertPage extends React.Component<IAlertPageProps, IAlertPageState> {
  state = {
    alerts : [],
    startTime : ""
  }

  componentDidMount = () => {
      this.setState({
        startTime : new Date().toUTCString()
      })
      setInterval(() => {
        const {startTime} = this.state;
        let endTime = new Date().toUTCString()
        // new AlertHandler().getAlerts(startTime, endTime).then(data => {
        //   this.setState({
        //     alerts : data
        //   })
        // })
        let response = new MockAlertHandler().getAlerts(startTime, endTime);
        this.setState({
          alerts : response
        })
      }, 3000);
      return () => clearInterval();
  }
  
    render() {
        const {alerts} = this.state;
        let dataSource = alerts;
        // const dataSource = [
        //     {
        //       key: '1',
        //       alert: 'asdfasdf',
        //       time: 'March 09 2020',
        //     },
        //     {
        //         key: '2',
        //         alert: 'slksls',
        //         time: 'March 09 2020',
        //       },
        //   ];

        const columns = [
            {
              title: 'Alert',
              dataIndex: '_id',
              key: '_id',
            },
            {
              title: 'Time',
              dataIndex: 'time',
              key: 'time',
            }
          ];
    
    return (
        <>
            <Title level={3}>Alerts</Title>
            <Table dataSource={dataSource} columns={columns} />
        </>
    )
  }
}

export default AlertPage;