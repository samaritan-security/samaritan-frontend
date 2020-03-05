import {Alert} from './api-types'
import {APIHandler} from './api-handler'

export class AlertHandler{
    /**
     * returns all alerts from startDate -> endDate
     * 
     * @param startDate: UTC Date string
     * @param endDate: UTC Date string
     */
    async getAlerts(startDate: string, endDate: string): Promise<Alert[]>{
        let alerts: Alert[] = [];
        let data = await APIHandler(`seen/${startDate}/${endDate}`, "GET");
        if (!!data) {
            let dataArray = JSON.parse(JSON.stringify(data));
            for (let i = 0; i < dataArray.length; i++) {
            alerts.push(new Alert(dataArray[i]));
            }
        }
        return alerts;
    }
}