import axios from "axios";

const API_BASE_URL = 'https://assets-service.coreinvent.es/'

//Auth service
function loginRequest(email = '', password = '', remember = false) {
    return axios.post(`${API_BASE_URL}api/security/login`, {email, password, remember}, {})
}

async function refreshTokenRequest() {
    return await axios.post(`${API_BASE_URL}api/security/refresh-token`, {})
}

async function logoutRequest() {
    return await axios.post(`${API_BASE_URL}api/security/logout`, {})
}
async function forgotRequest(email) {
    // TODO: validate email
    if(email && window.location.origin) {
        return await axios.post(`${API_BASE_URL}api/security/forgotPassword`, {
            "email": email,
            "url": `${window.location.origin}/auth/reset?token={token}&email={email}`
        })
    }
    else return false
}
async function resetRequest(email, token, newPassword, repeatNewPassword) {
    // TODO: validate email, local url
    if(email && token && newPassword && repeatNewPassword) {
        return await axios.post(`${API_BASE_URL}api/security/resetPassword`, {
            "email": email,
            "token": token,
            "password": newPassword,
            "password_confirmation": repeatNewPassword
        })
    }
    else return false
}

export {
    API_BASE_URL,
    loginRequest,
    logoutRequest,
    refreshTokenRequest,
    forgotRequest,
    resetRequest,
}