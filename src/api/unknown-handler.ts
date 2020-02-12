import { Unknown } from "./api-types";
import { APIHandler } from "./api-handler";

export class UnknownHandler {
  /**
   * returns a list of all known
   */
  async getAllUnknown(): Promise<Unknown[]> {
    let unknown: Unknown[] = [];
    let data = await APIHandler(`unknown`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        unknown.push(new Unknown(dataArray[i]));
      }
    }
    return unknown;
  }
}
