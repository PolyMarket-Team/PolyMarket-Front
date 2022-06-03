import { instance } from "./index";

export const getUserData = async (userId) => {
    const data = await instance.get(`users/${userId}/profile`);
    return data;
};

export const signin = async (formData) => {
    const data = await instance.post("users/signin", formData);
    return data;
};

export const signup = async (formData) => {
    const data = await instance.post("users/signup", formData);
    return data;
};
