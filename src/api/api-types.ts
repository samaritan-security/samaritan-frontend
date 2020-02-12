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
