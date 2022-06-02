import axios from "axios";
import * as TokenService from "@services/token-service";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// let isTokenRefreshing = false;
// let refreshSubscribers = [];
// const addRefreshSubscriber = (callback) => {
//     refreshSubscribers.push(callback);
// };

// instance.interceptors.request.use(
//     (config) => {
//         const accessToken = TokenService.getLocalAccessToken();

//         if (accessToken) {
//             config.headers["X-AUTH-TOKEN"] = accessToken;
//             return config;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error) => {
//         const originalConfig = error.config;

//         if (
//             error.response?.status === 401 &&
//             error.response?.data.message ===
//                 "access token 재발행에 실패했습니다."
//         ) {
//             if (!isTokenRefreshing) {
//                 const response = await instance.post(
//                     "users/token/refresh",
//                     {},
//                     {
//                         headers: {
//                             "X-REFRESH-TOKEN":
//                                 TokenService.getLocalRefreshToken(),
//                         },
//                     }
//                 );
//                 let accessToken = response.data.data.accessToken;
//                 instance.defaults.headers["X-AUTH-TOKEN"] = accessToken;
//                 localStorage.setItem("accessToken", accessToken);
//                 refreshSubscribers.map((callback) => callback(accessToken));
//                 refreshSubscribers = [];
//                 isTokenRefreshing = false;
//             }

//             const retryOriginalRequest = new Promise((resolve) => {
//                 addRefreshSubscriber((accessToken) => {
//                     if (originalConfig.headers) {
//                         originalConfig.headers["X-AUTH-TOKEN"] = accessToken;
//                         resolve(axios(originalConfig));
//                     }
//                 });
//             });

//             return retryOriginalRequest;
//         }
//         return Promise.reject(error);
//     }
// );
