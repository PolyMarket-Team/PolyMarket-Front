export const getLocalRefreshToken = () => {
    const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
    return refreshToken;
};

export const getLocalAccessToken = () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    return accessToken;
};

export const updateLocalAccessToken = (token) => {
    localStorage.setItem("accessToken", JSON.stringify(token));
};

export const setUserData = ({ token, userInfo }) => {
    localStorage.setItem("accessToken", JSON.stringify(token.accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(token.refreshToken));
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const removeUserData = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};
