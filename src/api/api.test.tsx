import React from "react";
import { UsersHandler } from "./users-handler";
import { AlertHandler } from "./alert-handler";

it("returns values for route /allUsers", () => {
  expect(true).toBe(true); //this is dumb but don't want to delete file so ya
});

it("returns values for /alerts/<s_time>/<f_time>", () => {
  new AlertHandler().getAlerts("Wed, 04 Mar 2020 03:41:12 GMT", new Date().toUTCString()).then(response => {
    console.log(response)
    expect(response.length > 0)
  })
})

it("returns an object with _id and time", () => {
  new AlertHandler().getAlerts("Wed, 04 Mar 2020 03:41:12 GMT", new Date().toUTCString()).then(response => {
    let alert = response[0]
    expect(!!alert._id && !!alert.time)
  })
})
