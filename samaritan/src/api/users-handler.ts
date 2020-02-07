import { User } from "./api-types";
import { APIHandler } from "./api-handler";

export class UsersHandler {
  /**
   * given _id, returns user
   * @param _id user id
   */
  async getUser(_id: string): Promise<User> {
    let data = await APIHandler(`users/getUser/${_id}`, "GET");
    return new User(data);
  }

  /**
   * returns list of all users
   */
  async getAllUsers(): Promise<User[]> {
    let users: User[] = [];
    let data = await APIHandler(`allUsers/`, "GET");
    if (!!data) {
      let dataArray = JSON.parse(JSON.stringify(data));
      for (let i = 0; i < dataArray.length; i++) {
        users.push(new User(dataArray[i]));
      }
    }
    return users;
  }

  /**
   * given user, adds new user
   * @param user
   */
  async createUser(user: User): Promise<User> {
    let data = await APIHandler(`user/`, "POST", user);
    return new User(data);
  }
}
