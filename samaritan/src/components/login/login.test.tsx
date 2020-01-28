import React from "react";
import { cleanup, render } from "@testing-library/react";
import Login from "./login";

it("renders without crashing", () => {
  const { container } = render(<Login />);
  expect(container.firstChild).not.toBe(null);
});
