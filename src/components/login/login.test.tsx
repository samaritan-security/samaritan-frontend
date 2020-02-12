import React from "react";
import { cleanup, render } from "@testing-library/react";
import Login from "./login";

afterEach(cleanup);

it("renders without crashing", () => {
  const { container } = render(<Login />);
  expect(container.firstChild).not.toBe(null);
});
