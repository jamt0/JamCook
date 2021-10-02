import axios, { AxiosResponse } from 'axios';
import config from 'config';
import {
	TCategory,
	TIngredient,
	TListRecipesSearch,
	TOptionsAges,
	TOptionsGender,
	TRecipeCard,
	TRecipeComplete,
	TUser,
	TUserEdit,
	TUserSignIn,
	TUserSignUp,
} from 'models';

namespace Server {
	export const signIn = async (
		user: TUserSignIn
	): Promise<
		AxiosResponse<{ user?: TUser; error?: string; accessToken?: string }>
	> => {
		const response = await axios.post(
			`${config.baseURL}/api/auth/signin`,
			user
		);
		return response;
	};

	export const signUp = async (
		user: TUserSignUp
	): Promise<
		AxiosResponse<{ user?: TUser; error?: string; accessToken?: string }>
	> => {
		const response = await axios.post(
			`${config.baseURL}/api/auth/signup`,
			user
		);
		return response;
	};

	export const getRecipesSearch = async (): Promise<TListRecipesSearch[]> => {
		const response = await axios.get(`${config.baseURL}/api/recipes/search`);
		return response.data;
	};

	export const getRecipesExplore = async (): Promise<TCategory[]> => {
		const response = await axios.get(`${config.baseURL}/api/recipes/explore`);
		return response.data;
	};

	export const getIngredients = async (): Promise<TIngredient[]> => {
		const response = await axios.get(`${config.baseURL}/api/ingredients`);
		return response.data;
	};

	export const getRecipesList = async (id: string): Promise<TRecipeCard[]> => {
		const response = await axios.get(
			`${config.baseURL}/api/recipes/list/${id}`
		);
		return response.data;
	};

	export const getRecipe = async (id: string): Promise<TRecipeComplete> => {
		const response = await axios.get(`${config.baseURL}/api/recipes/${id}`);
		return response.data;
	};

	export const getGenders = async (): Promise<TOptionsGender> => {
		const response = await axios.get(`${config.baseURL}/api/users/genders`);
		return response.data;
	};

	export const getAges = async (): Promise<TOptionsAges> => {
		const response = await axios.get(`${config.baseURL}/api/users/ages`);
		return response.data;
	};

	export const getUser = async (id: string): Promise<TUserEdit> => {
		const response = await axios.get(`${config.baseURL}/api/users/${id}`, {
			headers: config.headers,
		});
		return response.data;
	};

	export const authentication = async (): Promise<
		AxiosResponse<{ user?: TUser; error?: string; accessToken?: string }>
	> => {
		const response = await axios.get(
			`${config.baseURL}/api/auth/authentication`,
			{
				headers: config.headers,
			}
		);
		return response;
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
