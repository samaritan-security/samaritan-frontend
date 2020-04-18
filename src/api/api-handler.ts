import { local_url } from "./urls";

export async function APIHandler(
  extension: string,
  method: string,
  body?: object,
  info?: string
) {
  let response = "";
  let data = "";
  if (!!body) {
    data = JSON.stringify(body);
  }
  if (method === "POST" || method === "PUT") {
    await fetch(`${local_url}/${extension}`, {
      method: method,
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        response = json;
      })
      .catch(console.log);

    return response;
  } else {
    await fetch(`${local_url}/${extension}`, {
      method: method,
    })
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        response = json;
      })
      .catch(console.log);

    return response;
  }
}

export async function DNSHandler(name: string) {
  let response = "";

  const dnsRequest = new Request(`http://34.238.42.110:5000/${name}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  await fetch(dnsRequest)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      console.log(json);
      response = json;
    })
    .catch(console.log);

  return response;
}
