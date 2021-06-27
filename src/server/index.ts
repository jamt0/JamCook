import axios, { AxiosResponse } from 'axios';
import config from 'config';
import {
	TCategory,
	TListRecipesSearch,
	TUser,
	TUserSignIn,
	TUserSignUp,
} from 'models';

namespace Server {
	export const signIn: (
		user: TUserSignIn
	) => Promise<
		AxiosResponse<{ user?: TUser; error?: string; accessToken?: string }>
	> = async (user) => {
		const response = await axios.post(
			`${config.baseURL}/api/auth/signin`,
			user
		);
		return response;
	};

	export const signUp: (
		user: TUserSignUp
	) => Promise<
		AxiosResponse<{ user?: TUser; error?: string; accessToken?: string }>
	> = async (user) => {
		const response = await axios.post(
			`${config.baseURL}/api/auth/signup`,
			user
		);
		return response.data;
	};

	export const getRecipesSearch: () => Promise<TListRecipesSearch[]> =
		async () => {
			const response = await axios.get(`${config.baseURL}/api/recipes/search`);
			return response.data;
		};

	export const getRecipesExplore: () => Promise<TCategory[]> = async () => {
		const response = await axios.get(`${config.baseURL}/api/recipes/explore`);
		return response.data;
	};

	export const authentication = () => {
		return axios.get(`${config.baseURL}/api/auth/authentication`, {
			headers: config.headers,
		});
	};

	export const getUser = (id: string) => {
		return axios.get(`${config.baseURL}/api/users/${id}`, {
			headers: config.headers,
		});
	};

	export const putUser = (id: string, user: any): Promise<any> => {
		return axios.put(`${config.baseURL}/api/users/${id}`, user, {
			headers: config.headers,
		});
	};

	export const putImageAvatar = (id: string, imageAvatar: any) => {
		let headers = {
			'content-type': 'multipart/form-data',
			accessToken: config.headers.accessToken,
		};
		return axios.put(
			`${config.baseURL}/api/users/ImagesAvatars/${id}`,
			imageAvatar,
			{
				headers: headers,
			}
		);
	};

	export const getImageAvatar = (id: string) => {
		return axios.get(`${config.baseURL}/api/users/ImagesAvatars/${id}`, {
			headers: config.headers,
		});
	};

	export const getGenders = () => {
		return axios.get(`${config.baseURL}/api/users/genders`, {
			headers: config.headers,
		});
	};

	export const getAges = () => {
		return axios.get(`${config.baseURL}/api/users/ages`, {
			headers: config.headers,
		});
	};

	export const getAllergies = () => {
		return axios.get(`${config.baseURL}/api/users/preferences/allergies`, {
			headers: config.headers,
		});
	};

	export const getAllergiesUser = (userId: string) => {
		return axios.get(
			`${config.baseURL}/api/users/preferences/allergies/${userId}`,
			{
				headers: config.headers,
			}
		);
	};

	export const getComensalsUser = (userId: string) => {
		return axios.get(
			`${config.baseURL}/api/users/preferences/comensals/${userId}`,
			{
				headers: config.headers,
			}
		);
	};

	export const getDiets = () => {
		return axios.get(`${config.baseURL}/api/users/preferences/diets`, {
			headers: config.headers,
		});
	};

	export const getDietsUser = (userId: string) => {
		return axios.get(
			`${config.baseURL}/api/users/preferences/diets/${userId}`,
			{
				headers: config.headers,
			}
		);
	};

	export const getDislikeIngredients = () => {
		return axios.get(
			`${config.baseURL}/api/users/preferences/dislikeIngredients`,
			{
				headers: config.headers,
			}
		);
	};

	export const getDislikeIngredientsUser = (userId: string) => {
		return axios.get(
			`${config.baseURL}/api/users/preferences/dislikeIngredients/${userId}`,
			{
				headers: config.headers,
			}
		);
	};

	export const getkitchenLevels = () => {
		return axios.get(`${config.baseURL}/api/users/preferences/kitchenLevels`, {
			headers: config.headers,
		});
	};

	export const getkitchenLevelsUser = (userId: string) => {
		return axios.get(
			`${config.baseURL}/api/users/preferences/kitchenLevels/${userId}`,
			{
				headers: config.headers,
			}
		);
	};

	export const getObjectives = () => {
		return axios.get(`${config.baseURL}/api/users/preferences/objectives`, {
			headers: config.headers,
		});
	};

	export const getObjectivesUser = (userId: string) => {
		return axios.get(
			`${config.baseURL}/api/users/preferences/objectives/${userId}`,
			{
				headers: config.headers,
			}
		);
	};

	export const validateVerificationCode = (verificationCode: string) => {
		return axios.post(
			`${config.baseURL}/api/auth/validateVerificationCode`,
			verificationCode
		);
	};

	export const sendMailForgetPassword = (email: string) => {
		return axios.post(
			`${config.baseURL}/api/auth/sendMailForgetPassword`,
			email
		);
	};

	export const changePassword = (password: string) => {
		return axios.post(`${config.baseURL}/api/auth/changePassword`, password);
	};

	export const sendMessage = (message: any) => {
		return axios.post(`${config.baseURL}/api/auth/sendMessage`, message);
	};

	export const getSubjects = () => {
		return axios.get(`${config.baseURL}/api/auth/getSubjects`);
	};
}

export default Server;
