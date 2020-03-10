import React from "react";
import { cleanup, render } from "@testing-library/react";
import ActionRequest from './actionRequest'

it("renders without crashing", () => {
  const { container } = render(<ActionRequest/>);
  expect(container.firstChild).not.toBe(null);
});