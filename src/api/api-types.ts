export class User {
  _id: string;
  name: string;
  image: string;
  time: string;
  constructor(data: any) {
    this._id = data._id;
    this.name = data.name;
    this.image = data.image;
    this.time = data.time;
  }
}

export class Known {
  _id: string;
  name: string;
  img: string;
  constructor(data: any) {
    this._id = data._id;
    this.name = data.name;
    this.img = data.img;
  }
}

export class Unknown {
  _id: string;
  img: string;
  constructor(data: any) {
    this._id = data._id;
    this.img = data.img;
  }
}

export class Alert {
  _id: string;
  time: string;
  constructor(data: any) {
    this._id = data._id;
    this.time = data.created_at;
  }
}

export class Person {
  _id: string;
  name?: string;
  img: string;
  known: boolean;
  constructor(data: any) {
    this._id = data._id;
    this.name = data.name;
    this.img = data.img;
    this.known = data.known;
  }
}

export class Seen {
  _id: string;
  time: string;
  constructor(data: any) {
    this._id = data.ref_id;
    this.time = data.created_at;
  }
}
