import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const sendEmail = (data) => api.post("users/send-email", data);
export const confirmEmail = (data) => api.post("users/confirm-email", data);
export const signUp = (formData) => api.post("users/signup", formData);
export const signIn = (formData) => api.post("users/signin", formData);
// export const getUserData = (userId) => api.get(`users/${userId}/profile`);
