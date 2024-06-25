const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
const { errorHandlerHelper } = require('../helper/helper');

const createRequestMethods = (axiosInstance) => {
    return {
        getRequest: async (url, params = {}, headers = {}) => {
            console.log('Making GET request to:', axiosInstance, url, 'Valueeee', axiosInstance.defaults.baseURL);
            try {
                const response = await axiosInstance.get(url, { params, headers });
                return response.data;
            } catch (error) {
                errorHandlerHelper(error);
            }
        },
        postRequest: async (url, data = {}, headers = {}) => {
            try {
                console.log('POST Request', url, "DATA========>>>>>", data);
                const response = await axiosInstance.post(url, data, { headers });
                return response.data;
            } catch (error) {
                errorHandlerHelper(error);
            }
        },
        putRequest: async (url, data = {}, headers = {}) => {
            try {
                const response = await axiosInstance.put(url, data, { headers });
                return response.data;
            } catch (error) {
                errorHandlerHelper(error);
            }
        },
        deleteRequest: async (url, params = {}, headers = {}) => {
            try {
                const response = await axiosInstance.delete(url, { params, headers });
                return response.data;
            } catch (error) {
                errorHandlerHelper(error);
            }
        },
        uploadFile: async (url, filePath, headers = {}) => {
            try {
                const form = new FormData();
                form.append('file', fs.createReadStream(filePath));

                const response = await axiosInstance.post(url, form, {
                    headers: {
                        ...form.getHeaders(),
                        ...headers
                    }
                });
                return response.data;
            } catch (error) {
                errorHandlerHelper(error);
            }
        }
    }
};

module.exports = {
    createRequestMethods,
};
