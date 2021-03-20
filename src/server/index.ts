import axios from "axios";
import config from "../config/general";

export default class Server {

  public static signIn(user: { email: String, password: String }) {
    console.log(user);
    return axios.post(`${config.baseURL}/api/auth/signin`, user, {
      validateStatus: function (status) {
        return status < 500;
      },
    });
  }

  public static signUp(user: { name: String, email: String, password: String }) {
    console.log(user);
    return axios.post(`${config.baseURL}/api/auth/signup`, user, {
      validateStatus: function (status) {
        return status < 500;
      },
    });
  }

  public static authentication() {
    return axios.get(`${config.baseURL}/api/auth/authentication`, {
      validateStatus: function (status) {
        return status < 500;
      },
      headers: {
        accessToken: localStorage.getItem('accessToken')
      }
    });
  }

}
