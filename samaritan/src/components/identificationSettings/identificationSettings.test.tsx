import React from "react";
import { cleanup, render } from "@testing-library/react";
import IdentificationSettings from "./identificationSettings";

afterEach(cleanup);

it("renders without crashing", () => {
  const { container } = render(<IdentificationSettings />);
  expect(container.firstChild).not.toBe(null);
});
