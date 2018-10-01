const axios = require('axios')

// backend service api
export default () => {
    return axios.create({
        baseURL: `http://localhost:3010/api/v0/`
    })
}