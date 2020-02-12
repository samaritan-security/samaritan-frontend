import React from "react";
import { cleanup, render } from "@testing-library/react";
import Settings from "./settings";

afterEach(cleanup);

it("renders without crashing", () => {
  const { container } = render(<Settings />);
  expect(container.firstChild).not.toBe(null);
});
