import { APIHandler } from "./api-handler";
import { Camera } from "./api-types";

export class CameraHandler {
  async getCameras(): Promise<Camera[]> {
    let cameras: Camera[] = [];
    let data = await APIHandler(`camera`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      dataArray.array.forEach((element: any) => {
        cameras.push(new Camera(element));
      });
    }
    return cameras;
  }
}
