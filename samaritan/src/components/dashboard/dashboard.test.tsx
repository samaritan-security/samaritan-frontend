import React from "react";
import { cleanup, render } from "@testing-library/react";
import Dashboard from "./dashboard";

it("renders without crashing", () => {
  const { container } = render(<Dashboard />);
  expect(container.firstChild).not.toBe(null);
});
