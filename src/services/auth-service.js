import * as api from "@api/index";

export const sendemail = (data) => {
    return api.sendEmail(data);
};

export const confirmemail = (data) => {
    return api.confirmEmail(data);
};

export const signup = (formData) => {
    return api.signUp(formData);
};

export const signin = (formData) => {
    return api.signIn(formData).then((response) => {
        if (response.data.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
        }
        return response.data.data;
    });
};

export const logout = () => {
    localStorage.removeItem("user");
};
