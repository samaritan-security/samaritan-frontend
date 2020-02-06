export class User {
  constructor(data: any) {
    this._id = data._id;
    this.name = data.name;
    this.image = data.image;
    this.time = data.time;
  }
  _id: string;
  name: string;
  image: string;
  time: string;
}
