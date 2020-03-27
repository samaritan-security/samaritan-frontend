import { local_url } from "./urls";

export async function APIHandler(
  extension: string,
  method: string,
  body?: object
) {
  let response = "";
  let data = "";
  if (!!body) {
    data = JSON.stringify(body);
  }
  if (method === "POST" || method === "PUT") {
    await fetch(`${local_url}/${extension}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => {
        return data.json();
      })
      .then(json => {
        response = json;
      })
      .catch(console.log);

    return response;
  } else {
    await fetch(`${local_url}/${extension}`, {
      method: method
    })
      .then(data => {
        return data.json();
      })
      .then(json => {
        response = json;
      })
      .catch(console.log);

    return response;
  }
}
