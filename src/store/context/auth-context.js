import React, { useState } from "react";

const AuthContext = React.createContext({
    emailTime: "",
    setEmailTime: "",
    expirationTime: "",
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const [emailTime, setEmailTime] = useState(300);
    const [expirationTime, setExpirationTime] = useState("");
    const [codeIsExpire, setCodeIsExpire] = useState(false);

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
        codeIsExpire,
        setCodeIsExpire,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
