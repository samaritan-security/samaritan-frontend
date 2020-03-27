import React from "react";
import IdentificationList from "./identificationList";
import "antd/dist/antd.css";
import NewIdentificationList from "./newIdentificationList";
import { Camera } from "../../api/api-types";

export default { title: "IdentificationList" };

let camera = new Camera({
  _id: "5e7a5908ed5cd22c249a798c",
  nickname: "home-camera",
  ip: "192.168.1.107"
});

export const knownList = () => (
  <IdentificationList type="known" title="Recognized" />
);

export const unknownList = () => (
  <IdentificationList type="unknown" title="Unknown" />
);

export const newList = () => {
  <NewIdentificationList
    startTime={new Date().toUTCString()}
    camera={camera}
  />;
};
