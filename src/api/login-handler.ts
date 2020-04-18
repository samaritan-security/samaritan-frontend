import { dnsEntry } from "./api-types";
import { DNSHandler } from "./api-handler";

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
}
