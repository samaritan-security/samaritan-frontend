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
  ref_id: string;
  time: string;
  camera: string;
  constructor(data: any) {
    this._id = data._id;
    this.ref_id = data.ref_id;
    this.time = data.created_at;
    this.camera = data.camera_id;
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
  camera: string;
  constructor(data: any) {
    this._id = data.ref_id;
    this.time = data.created_at;
    this.camera = data.camera_id;
  }
}

export class Camera {
  _id: string;
  ip: string;
  nickname: string;
  constructor(data: any) {
    this._id = data._id;
    this.ip = data.ip;
    this.nickname = data.nickname;
  }
}
