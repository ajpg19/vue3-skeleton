import axios from "axios";

const API_BASE_URL = 'http://assets-service.coreinvent.es/api/'
// const API_BASE_URL = 'http://blanquerna-dev.coreinvent.es/api/'

function loginRequest(email = '', password = '', remember = false ) {
    return axios.post(`${API_BASE_URL}security/login`,
        {email, password, remember},
    )
}

function logoutRequest(token) {
    const headers = {
        Authorization: `Bearer ${token}`
    }
    return axios.post(`${API_BASE_URL}security/logout`,
        {}, {
            headers
        }
    )
}

export {API_BASE_URL, loginRequest, logoutRequest}