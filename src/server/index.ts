import axios from "axios";
import config from "config/general";

interface IUser {
  name?: string;
  email: string;
  password?: string;
  age?: string;
  gender?: string;
}
export default class Server {

  public static signIn(user: IUser) {
    console.log(user);
    return axios.post(`${config.baseURL}/api/auth/signin`, user);
  }

  public static signUp(user: IUser) {
    console.log(user);
    return axios.post(`${config.baseURL}/api/auth/signup`, user);
  }

  public static authentication() {
    return axios.get(`${config.baseURL}/api/auth/authentication`, {
      headers: config.headers
    });
  }

  public static getUser(id: string) {
    console.log(id);
    return axios.get(`${config.baseURL}/api/users/getUser/${id}`, {
      headers: config.headers
    });
  }

  public static updateUser(id: string, user: IUser): Promise<any> {
    console.log(user);
    console.log(id);
    return axios.post(`${config.baseURL}/api/users/updateUser/${id}`, user, {
      headers: config.headers
    });
  }

  public static updateAvatarUser(id: string, imageAvatar: any) {
    console.log(imageAvatar);
    console.log(id);
    let headers = {
      'content-type': 'multipart/form-data',
      'accessToken': config.headers.accessToken
    };
    return axios.post(`${config.baseURL}/api/users/updateAvatarUser/${id}`, imageAvatar, {
      headers: headers
    });
  }

  public static getAvatarUser(id: string) {
    console.log(id);
    return axios.get(`${config.baseURL}/api/users/getAvatarUser/${id}`, {
      headers: config.headers
    });
  }

}
