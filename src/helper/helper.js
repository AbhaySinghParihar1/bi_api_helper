const axios = require("axios");

const customAxiosInstanceHelper = (baseUrl, headers = {}, timeOut = 5000) => {
    return axios.create({
        baseURL: baseUrl,
        headers: headers,
        timeout: timeOut,
    });
};

const errorHandlerHelper = (error) => {
    if (error.response) {
        console.error('Response error:', error.response.data);
        throw error.response.data;
    } else if (error.request) {
        console.error('Request error:', error.request);
        throw new Error('No response received from the server');
    } else {
        console.error('Error:', error.message);
        throw new Error(error.message);
    }
};

module.exports = {
    customAxiosInstanceHelper, 
    errorHandlerHelper
};
