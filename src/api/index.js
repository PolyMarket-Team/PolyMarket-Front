import axios from "axios";
const api = axios.create({ baseURL: "https://api-dev.polymarket.kr/" });

export const sendEmail = (data) => api.post("users/send-email", data);
export const confirmEmail = (data) => api.post("users/confirm-email", data);
export const signUp = (formData) => api.post("users/signup", formData);
export const signIn = (formData) => api.post("users/signin", formData);
