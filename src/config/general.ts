var api_url = process.env.API_URL || "http://192.168.0.158:3000";
console.log('API Host ENV : ' + process.env.API_URL)
console.log('API Host : ' + api_url)

export default {
    baseURL: api_url,
    headers: {
        "Content-type": "application/json"
    },
}