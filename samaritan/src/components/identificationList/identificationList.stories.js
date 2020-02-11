import React from "react";
import IdentificationList from "./identificationList";
import "antd/dist/antd.css";

export default { title: "IdentificationList" };

export const knownList = () => (
  <IdentificationList type="known" title="Recognized" />
);

export const unknownList = () => (
  <IdentificationList type="unknown" title="Unknown" />
);
