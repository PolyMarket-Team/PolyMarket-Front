import axios from "axios";

export const sendEmail = (data) => axios.post("/users/send-email", data);
export const confirmEmail = (data) => axios.post("/users/confirm-email", data);
export const signUp = (formData) => axios.post("/users/signup", formData);
export const signIn = (formData) => axios.post("/users/signin", formData);
