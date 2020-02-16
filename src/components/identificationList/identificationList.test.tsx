import React from "react";
import { cleanup, render } from "@testing-library/react";
import IdentificationList from "./identificationList";

afterEach(cleanup);

it("renders without crashing", () => {
  const { container } = render(<IdentificationList />);
  expect(container.firstChild).not.toBe(null);
});
