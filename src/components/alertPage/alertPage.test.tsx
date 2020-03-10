import React from "react";
import { cleanup, render } from "@testing-library/react";
import AlertPage from "./alertPage";

afterEach(cleanup);

it("renders without crashing", () => {
  const { container } = render(
    <AlertPage startTime={new Date().toUTCString()} />
  );
  expect(container.firstChild).not.toBe(null);
});
