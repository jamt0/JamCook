import axios from "axios";
import config from "../config/general";

export default class Server {

  public static signIn(user: { email: String, password: String }) {
    console.log(user);
    return axios.post(`${config.baseURL}/api/auth/signin`, user);
  }

  public static signUp(user: { name: String, email: String, password: String }) {
    console.log(user);
    return axios.post(`${config.baseURL}/api/auth/signup`, user);
  }

  public static authentication() {
    return axios.get(`${config.baseURL}/api/auth/authentication`, {
      headers: {
        accessToken: localStorage.getItem('accessToken')
      }
    });
  }

}
