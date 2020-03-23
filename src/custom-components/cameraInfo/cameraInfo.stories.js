import React from "react";
import CameraInfo from "./cameraInfo";
import { Camera } from "../../api/api-types";

export default { title: "CameraInfo", module };

export const cameraInfo = () => (
  <CameraInfo
    camera={new Camera({ _id: "0", nickname: "home", ip: "192.168.1.107" })}
  />
);
