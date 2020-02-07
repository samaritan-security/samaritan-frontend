import React from "react";
import { UsersHandler } from "./users-handler";

it("returns values for route /allUsers", () => {
  return new UsersHandler().getAllUsers().then(data => {
    console.log(data);
    expect(data).not.toBe(null);
  });
});
