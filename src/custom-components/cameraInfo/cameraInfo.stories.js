import React from "react";
import CameraInfo from "./cameraInfo";
import { Camera } from "../../api/api-types";

export default { title: "CameraInfo", module };

export const cameraInfo = () => (
  <CameraInfo
    camera={
      new Camera({
        _id: "5e7a5908ed5cd22c249a798c",
        nickname: "home-camera",
        ip: "192.168.1.107"
      })
    }
    startTime={"Thu, 26 Mar 2020 22:49:43 GMT"}
  />
);
