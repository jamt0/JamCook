import axios from 'axios';
import config from 'config';
import { TUserSignIn, TUserSignUp } from 'models';

const signIn: (user: TUserSignIn) => Promise<any> = async (user) => {
	const response = await axios.post(`${config.baseURL}/api/auth/signin`, user);
	return response;
};

const signUp: (user: TUserSignUp) => Promise<any> = async (user) => {
	const response = await axios.post(`${config.baseURL}/api/auth/signup`, user);
	return response;
};

const authentication = () => {
	return axios.get(`${config.baseURL}/api/auth/authentication`, {
		headers: config.headers,
	});
};

const getUser = (id: string) => {
	return axios.get(`${config.baseURL}/api/users/${id}`, {
		headers: config.headers,
	});
};

const putUser = (id: string, user: any): Promise<any> => {
	return axios.put(`${config.baseURL}/api/users/${id}`, user, {
		headers: config.headers,
	});
};

const putImageAvatar = (id: string, imageAvatar: any) => {
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

const getImageAvatar = (id: string) => {
	return axios.get(`${config.baseURL}/api/users/ImagesAvatars/${id}`, {
		headers: config.headers,
	});
};

const getGenders = () => {
	return axios.get(`${config.baseURL}/api/users/genders`, {
		headers: config.headers,
	});
};

const getAges = () => {
	return axios.get(`${config.baseURL}/api/users/ages`, {
		headers: config.headers,
	});
};

const getAllergies = () => {
	return axios.get(`${config.baseURL}/api/users/preferences/allergies`, {
		headers: config.headers,
	});
};

const getAllergiesUser = (userId: string) => {
	return axios.get(
		`${config.baseURL}/api/users/preferences/allergies/${userId}`,
		{
			headers: config.headers,
		}
	);
};

const getComensalsUser = (userId: string) => {
	return axios.get(
		`${config.baseURL}/api/users/preferences/comensals/${userId}`,
		{
			headers: config.headers,
		}
	);
};

const getDiets = () => {
	return axios.get(`${config.baseURL}/api/users/preferences/diets`, {
		headers: config.headers,
	});
};

const getDietsUser = (userId: string) => {
	return axios.get(`${config.baseURL}/api/users/preferences/diets/${userId}`, {
		headers: config.headers,
	});
};

const getDislikeIngredients = () => {
	return axios.get(
		`${config.baseURL}/api/users/preferences/dislikeIngredients`,
		{
			headers: config.headers,
		}
	);
};

const getDislikeIngredientsUser = (userId: string) => {
	return axios.get(
		`${config.baseURL}/api/users/preferences/dislikeIngredients/${userId}`,
		{
			headers: config.headers,
		}
	);
};

const getkitchenLevels = () => {
	return axios.get(`${config.baseURL}/api/users/preferences/kitchenLevels`, {
		headers: config.headers,
	});
};

const getkitchenLevelsUser = (userId: string) => {
	return axios.get(
		`${config.baseURL}/api/users/preferences/kitchenLevels/${userId}`,
		{
			headers: config.headers,
		}
	);
};

const getObjectives = () => {
	return axios.get(`${config.baseURL}/api/users/preferences/objectives`, {
		headers: config.headers,
	});
};

const getObjectivesUser = (userId: string) => {
	return axios.get(
		`${config.baseURL}/api/users/preferences/objectives/${userId}`,
		{
			headers: config.headers,
		}
	);
};

const validateVerificationCode = (verificationCode: string) => {
	return axios.post(
		`${config.baseURL}/api/auth/validateVerificationCode`,
		verificationCode
	);
};

const sendMailForgetPassword = (email: string) => {
	return axios.post(`${config.baseURL}/api/auth/sendMailForgetPassword`, email);
};

const changePassword = (password: string) => {
	return axios.post(`${config.baseURL}/api/auth/changePassword`, password);
};

const sendMessage = (message: any) => {
	return axios.post(`${config.baseURL}/api/auth/sendMessage`, message);
};

const getSubjects = () => {
	return axios.get(`${config.baseURL}/api/auth/getSubjects`);
};

const server = {
	signIn,
	signUp,
	authentication,
	getUser,
	putUser,
	putImageAvatar,
	getImageAvatar,
	getGenders,
	getAges,
	getAllergies,
	getAllergiesUser,
	getComensalsUser,
	getDiets,
	getDietsUser,
	getDislikeIngredients,
	getDislikeIngredientsUser,
	getkitchenLevels,
	getkitchenLevelsUser,
	getObjectives,
	getObjectivesUser,
	validateVerificationCode,
	sendMailForgetPassword,
	changePassword,
	sendMessage,
	getSubjects,
};

export default server;
