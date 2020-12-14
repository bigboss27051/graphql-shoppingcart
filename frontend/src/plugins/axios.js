import axios from 'axios'
import { refreshAccessToken } from '../services/authen'

const localStorage = window.localStorage;
const httpClient = axios.create({
  baseURL: 'http://localhost:4000',
})
httpClient.interceptors.request.use(async (config) => {
  const jwtToken = localStorage.getItem("accessToken")
  const tokenType = localStorage.getItem("tokenType")
  if (jwtToken) {
    config.headers = {
      'authorization': `${tokenType} ${jwtToken}`,
      'Content-Type': 'application/json'
    }
  }
  return config;

});

httpClient.interceptors.response.use((response) => {
  return response
}, async function (error) {
  const originalRequest = error.config
  const code = parseInt(error.response && error.response.status)
  const message = error.response.data.message
  if (code === 401) {
    if (message.includes("jwt expired")) {
      try {
        originalRequest.__isRetryRequest = true
        const username = localStorage.getItem("username")
        const refreshToken = localStorage.getItem("refreshToken")
        axios.defaults.headers.common['Authorization'] = ''
        const {
          tokenType = '',
          accessToken = '',
          refreshToken: newRefreshToken,
          expiresIn
        } = await refreshAccessToken(username, refreshToken)
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("tokenType", tokenType)
        localStorage.setItem("refreshToken", newRefreshToken)
        localStorage.setItem("expiresIn", expiresIn)
        axios.defaults.headers.common['Authorization'] = `${tokenType} ${accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        localStorage.clear()
        return error
      }
    }
  }
  return Promise.reject(error);
});

export const httpClient
