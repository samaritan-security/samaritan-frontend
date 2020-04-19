import { Person } from "./api-types";
import { APIHandler } from "./api-handler";

export class PersonHandler {
  ip: string;
  constructor(ip: string) {
    this.ip = ip;
  }
  /**
   * returns all known people
   */
  async getAllKnownPeople(): Promise<Person[]> {
    let people: Person[] = [];
    let data = await APIHandler(`http://${this.ip}:5000/people/known`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        people.push(new Person(dataArray[i]));
      }
    }
    return people;
  }

  /**
   * returns all unknown people
   */
  async getAllUnknownPeople(): Promise<Person[]> {
    let people: Person[] = [];
    let data = await APIHandler(`http://${this.ip}:5000/people/unknown`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        people.push(new Person(dataArray[i]));
      }
    }
    return people;
  }

  async getById(id: string): Promise<Person> {
    let people: Person[] = [];
    let data = await APIHandler(`http://${this.ip}:5000/people/${id}`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        people.push(new Person(dataArray[i]));
      }
    }
    return people[0];
  }
}

export class MockPersonHandler {
  getById(id: string): Person {
    let data = new Person({ _id: 0, name: "Foo Bar", img: "" });
    return data;
  }
}
