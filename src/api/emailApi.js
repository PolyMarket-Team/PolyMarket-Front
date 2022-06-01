import { instance } from "./index";

export const sendemail = async (email) => {
    const data = await instance.post("users/send-email", email);
    return data;
};

export const confirmemail = async (code) => {
    const data = await instance.post("users/confirm-email", code);
    return data;
};
