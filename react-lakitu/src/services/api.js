import _ from 'lodash'

import apiConfig from 'src/config/'

export default class API {
    constructor(apiConfig) {
        this.apiConfig = apiConfig
    }

    get(url, _options) {
        const options = {
            method: 'GET'
        }
        return fetch(`${this.apiConfig.baseUrl}url`, _.apply(options, _options))
    }

    post(url, _options) {
        const options = {
            method: 'POST'
        }
        return fetch(`${this.apiConfig.baseUrl}url`, _.apply(options, _options))
    }
}
