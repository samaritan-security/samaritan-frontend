import { APIHandler } from "./api-handler";
import { Seen, Person } from "./api-types";

export class SeenHandler {
  ip: string;
  constructor(ip: string) {
    this.ip = ip;
  }
  async getSeen(
    cameraID: string,
    startTime: string,
    endTime: string
  ): Promise<Seen[]> {
    let start = "Fri, 24 Apr 2019 02:43:03 GMT";
    let seen: Seen[] = [];
    let data = await APIHandler(
      `http://${this.ip}:5000/seen/${cameraID}/${start}/${endTime}`,
      "GET"
    );
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        seen.push(new Seen(dataArray[i]));
      }
    }
    return seen;
  }

  async getAllPeople(
    cameraID: string,
    startTime: string,
    endTime: string
  ): Promise<Person[]> {
    let people: Person[] = [];
    this.getSeen(cameraID, startTime, endTime).then((seen: Seen[]) => {
      seen.forEach(async (element) => {
        let data = await APIHandler(
          `http://${this.ip}:5000/people/${element._id}`,
          "GET"
        );
        if (!!data) {
          people.push(new Person(data[0]));
        }
      });
    });
    return people;
  }
}
