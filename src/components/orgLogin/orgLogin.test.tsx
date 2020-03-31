import React from "react";
import { cleanup, render } from "@testing-library/react";
import OrgLogin from "./orgLogin"

it("renders without crashing", () => {
  const { container } = render(<OrgLogin />);
  expect(container.firstChild).not.toBe(null);
});