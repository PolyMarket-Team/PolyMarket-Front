import * as api from "@api/index";

export const signup = async (formData, router) => {
    try {
        const response = await api.signUp(formData);
        console.log(response);
        router("/login", { replace: true });
    } catch (error) {
        console.log(error);
    }
};

export const signin = async (formData, router) => {
    try {
        const response = await api.signIn(formData);
        // console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
};
