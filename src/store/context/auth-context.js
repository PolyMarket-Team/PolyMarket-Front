import React, { useState } from "react";
import * as actions from "@actions/auth";
import * as api from "@api/index";

const AuthContext = React.createContext({
    token: "",
    emailTime: "",
    setEmailTime: "",
    expirationTime: "",
    isCodeExpire: "",
    setIsCodeExpire: "",
    isLoggedIn: false,
    sendemail: () => {},
    codeconfirm: () => {},
    signup: () => {},
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);
    const [emailTime, setEmailTime] = useState(300);
    const [expirationTime, setExpirationTime] = useState("");
    const [isCodeExpire, setIsCodeExpire] = useState(false);

    const userIsLoggedIn = !!token;

    const sendEmailHandler = async (data) => {
        try {
            const response = await api.sendEmail(data);
            console.log(response);
            setExpirationTime(response.data.data.expireDateTime);
        } catch (error) {
            console.log(error);
        }
    };

    const confirmEmailHandler = async (data) => {
        try {
            const response = await api.confirmEmail(data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const loginHandler = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    };

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setToken(null);
    };

    const contextValue = {
        token: token,
        expirationTime,
        sendemail: sendEmailHandler,
        codeconfirm: confirmEmailHandler,
        signup: actions.signup,
        login: loginHandler,
        logout: logoutHandler,
        isLoggedIn: userIsLoggedIn,
        emailTime,
        setEmailTime,
        isCodeExpire,
        setIsCodeExpire,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
