import React from "react";
import { cleanup, render } from "@testing-library/react";
import VideoStream from "./videoStream";

afterEach(cleanup);

it("renders without crashing", () => {
  const { container } = render(<VideoStream />);
  expect(container.firstChild).not.toBe(null);
});
