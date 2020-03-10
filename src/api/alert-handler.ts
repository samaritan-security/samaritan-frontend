import { Alert } from "./api-types";
import { APIHandler } from "./api-handler";

export class AlertHandler {
  /**
   * returns all alerts from startDate -> endDate
   *
   * @param startDate: UTC Date string
   * @param endDate: UTC Date string
   */
  async getAlerts(startDate: string, endDate: string): Promise<Alert[]> {
    let alerts: Alert[] = [];
    let data = await APIHandler(`alerts/${startDate}/${endDate}`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        alerts.push(new Alert(dataArray[i]));
      }
    }
    return alerts;
  }
}

/**
 * Mocks functionality of AlertHandler
 * returns hardcoded array of alerts
 */
export class MockAlertHandler {
  getAlerts(startDate: string, endDate: string): Alert[] {
    let alerts: Alert[] = [];

    alerts.push(new Alert({ _id: 0, created_at: new Date().toUTCString() }));
    alerts.push(new Alert({ _id: 1, created_at: new Date().toUTCString() }));
    alerts.push(new Alert({ _id: 2, created_at: new Date().toUTCString() }));

    return alerts;
  }
}
