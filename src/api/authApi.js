import { instance } from "./index";

export const signin = async (formData) => {
    const data = await instance.post("users/signin", formData);
    return data;
};

export const signup = async (formData) => {
    const data = await instance.post("users/signup", formData);
    return data;
};
