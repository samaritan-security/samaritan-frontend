import { dnsEntry } from "./api-types";
import { DNSHandler, APIHandler2 } from "./api-handler";

export class LoginHandler {
  async getOrganizationIP(name: string): Promise<dnsEntry> {
    let entries: dnsEntry[] = [];
    let data = await DNSHandler(name);
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        entries.push(new dnsEntry(dataArray[i]));
      }
    }
    return entries[0];
  }

  async login(
    ip: string,
    username: string,
    password: string
  ): Promise<boolean> {
    let loginURL = `http://${ip}:5000/users/login`;
    let body = { username: username, password: password };
    let response = await APIHandler2(loginURL, body);
    return response;
  }
}
