import { APIHandler } from "./api-handler";
import { Seen, Person } from "./api-types";

export class SeenHandler {
  async getSeen(
    cameraID: string,
    startTime: string,
    endTime: string
  ): Promise<Seen[]> {
    let seen: Seen[] = [];
    let data = await APIHandler(
      `seen/${cameraID}/${startTime}/${endTime}`,
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
      seen.forEach(async element => {
        let data = await APIHandler(`people/${element._id}`, "GET");
        if (!!data) {
          people.push(new Person(data));
        }
      });
    });
    return people;
  }
}
