import React from "react";
import CameraButton from "./cameraButton";
import { Camera } from "../../api/api-types";

export default { title: "CameraButton", module };

export const cameraButton = () => (
  <CameraButton
    camera={new Camera({ _id: "0", nickname: "home", ip: "192.168.1.107" })}
  />
);
