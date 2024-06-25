const { createRequestMethods } = require('./src/controller/httpsRequestController');
const { customAxiosInstanceHelper } = require('./src/helper/helper');

module.exports = {
    createRequestMethods,
    customAxiosInstanceHelper
};
