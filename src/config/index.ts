var api_url = process.env.API_URL || 'http://localhost:5000';
console.log('API Host ENV : ' + process.env.API_URL);
console.log('API Host : ' + api_url);

const config = {
	baseURL: api_url,
	headers: {
		accessToken: localStorage.getItem('accessToken'),
	},
};

export default config;
