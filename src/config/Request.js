const { default: fetch } = require('node-fetch')
const baseURL = require('./API')

class Request {
    #cookie;
    constructor(cookie = '') {
        this.#cookie = cookie
    }

    /**
     * 
     * @param {'api_v2'|'api_v3'|'api_v4'|'api_v5'} api
     * @param {string} path 
     * @param {string} params
     * @param {any} options
     */
    makeRequest = async (api, path, params, options = {}) => {
        return await fetch(`${baseURL[api] + path}?${new URLSearchParams(params).toString()}`, {
            method: options.method || 'GET',
            ...options
        })
    }
}

module.exports = Request