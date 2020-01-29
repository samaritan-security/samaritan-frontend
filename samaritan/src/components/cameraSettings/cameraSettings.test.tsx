import React from "react";
import { cleanup, render } from "@testing-library/react";
import CameraSettings from "./cameraSettings";

afterEach(cleanup);

it("renders without crashing", () => {
  const { container } = render(<CameraSettings />);
  expect(container.firstChild).not.toBe(null);
});
