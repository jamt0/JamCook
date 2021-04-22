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

  //Auth
  public static signIn(user: IUser) {
    return axios.post(`${config.baseURL}/api/auth/signin`, user);
  }

  public static signUp(user: IUser) {
    return axios.post(`${config.baseURL}/api/auth/signup`, user);
  }

  public static authentication() {
    return axios.get(`${config.baseURL}/api/auth/authentication`, {
      headers: config.headers
    });
  }

  //User
  public static getUser(id: string) {
    return axios.get(`${config.baseURL}/api/users/${id}`, {
      headers: config.headers
    });
  }

  public static putUser(id: string, user: IUser): Promise<any> {
    return axios.put(`${config.baseURL}/api/users/${id}`, user, {
      headers: config.headers
    });
  }

  //User Image Avatar
  public static putImageAvatar(id: string, imageAvatar: any) {
    let headers = {
      'content-type': 'multipart/form-data',
      'accessToken': config.headers.accessToken
    };
    return axios.put(`${config.baseURL}/api/users/ImagesAvatars/${id}`, imageAvatar, {
      headers: headers
    });
  }

  public static getImageAvatar(id: string) {
    return axios.get(`${config.baseURL}/api/users/ImagesAvatars/${id}`, {
      headers: config.headers
    });
  }

  //User Gender
  public static getGenders() {
    return axios.get(`${config.baseURL}/api/users/genders`, {
      headers: config.headers
    });
  }

  //User Age
  public static getAges() {
    return axios.get(`${config.baseURL}/api/users/ages`, {
      headers: config.headers
    });
  }

  //User Preferences Allergies
  public static getAllergies() {
    return axios.get(`${config.baseURL}/api/users/preferences/allergies`, {
      headers: config.headers
    });
  }

  public static getAllergiesUser(userId: string) {
    return axios.get(`${config.baseURL}/api/users/preferences/allergies/${userId}`, {
      headers: config.headers
    });
  }

  //User Preferences Comensals
  public static getComensalsUser(userId: string) {
    return axios.get(`${config.baseURL}/api/users/preferences/comensals/${userId}`, {
      headers: config.headers
    });
  }

  //User Preferences Diets
  public static getDiets() {
    return axios.get(`${config.baseURL}/api/users/preferences/diets`, {
      headers: config.headers
    });
  }

  public static getDietsUser(userId: string) {
    return axios.get(`${config.baseURL}/api/users/preferences/diets/${userId}`, {
      headers: config.headers
    });
  }

  //User Preferences DislikeIngredients
  public static getDislikeIngredients() {
    return axios.get(`${config.baseURL}/api/users/preferences/dislikeIngredients`, {
      headers: config.headers
    });
  }

  public static getDislikeIngredientsUser(userId: string) {
    return axios.get(`${config.baseURL}/api/users/preferences/dislikeIngredients/${userId}`, {
      headers: config.headers
    });
  }

  //User Preferences KitchenLevelsUser
  public static getkitchenLevels() {
    return axios.get(`${config.baseURL}/api/users/preferences/kitchenLevels`, {
      headers: config.headers
    });
  }

  public static getkitchenLevelsUser(userId: string) {
    return axios.get(`${config.baseURL}/api/users/preferences/kitchenLevels/${userId}`, {
      headers: config.headers
    });
  }

  //User Preferences Objectives
  public static getObjectives() {
    return axios.get(`${config.baseURL}/api/users/preferences/objectives`, {
      headers: config.headers
    });
  }

  public static getObjectivesUser(userId: string) {
    return axios.get(`${config.baseURL}/api/users/preferences/objectives/${userId}`, {
      headers: config.headers
    });
  }

  //User ForgetPassword
  public static validateVerificationCode(verificationCode: string) {
    return axios.post(`${config.baseURL}/api/auth/validateVerificationCode`, verificationCode);
  }

  public static sendMailForgetPassword(email: string) {
    return axios.post(`${config.baseURL}/api/auth/sendMailForgetPassword`, email);
  }

  public static changePassword(password: string) {
    return axios.post(`${config.baseURL}/api/auth/changePassword`, password);
  }

  //Contact Us
  public static sendMessage(message: any) {
    return axios.post(`${config.baseURL}/api/auth/sendMessage`, message);
  }

  public static getSubjects() {
    return axios.get(`${config.baseURL}/api/auth/getSubjects`);
  }

}
