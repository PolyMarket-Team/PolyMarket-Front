import React, { useState } from "react";

const AuthContext = React.createContext({
    emailTime: "",
    setEmailTime: "",
    expirationTime: "",
    isCodeExpire: "",
    setIsCodeExpire: "",
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const [emailTime, setEmailTime] = useState(300);
    const [expirationTime, setExpirationTime] = useState("");
    const [isCodeExpire, setIsCodeExpire] = useState(false);

    const loginHandler = () => {};

    const logoutHandler = () => {};

    const expirationTimeHandler = (expiredAt) => {
        setExpirationTime(expiredAt);
    };

    const contextValue = {
        expirationTime,
        login: loginHandler,
        logout: logoutHandler,
        specifyExpirationTime: expirationTimeHandler,
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
