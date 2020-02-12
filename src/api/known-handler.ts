import { Known } from "./api-types";
import { APIHandler } from "./api-handler";

export class KnownHandler {
  /**
   * returns a list of all known
   */
  async getAllKnown(): Promise<Known[]> {
    let known: Known[] = [];
    let data = await APIHandler(`known`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        known.push(new Known(dataArray[i]));
      }
    }
    return known;
  }
}
