import React from "react";
import { cleanup, render } from "@testing-library/react";
import CameraInfo from "./cameraInfo";
import { Camera } from "../../api/api-types";

afterEach(cleanup);

it("renders without crashing", () => {
  const { container } = render(
    <CameraInfo
      camera={new Camera({ _id: "0", nickname: "home", ip: "192.168.1.107" })}
    />
  );
  expect(container.firstChild).not.toBe(null);
});
