import { APIHandler } from "./api-handler";
import { Camera } from "./api-types";

export class CameraHandler {
  ip: string;
  constructor(ip: string) {
    this.ip = ip;
  }
  async getCameras(): Promise<Camera[]> {
    let cameras: Camera[] = [];
    let data = await APIHandler(`http://${this.ip}:5000/camera`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      dataArray.forEach((element: any) => {
        cameras.push(new Camera(element));
      });
    }
    return cameras;
  }
  async getCameraById(id: string): Promise<Camera> {
    let cameras: Camera[] = [];
    let data = await APIHandler(`http://${this.ip}:5000/camera/${id}`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        cameras.push(new Camera(dataArray[i]));
      }
    }
    return cameras[0];
  }
}
