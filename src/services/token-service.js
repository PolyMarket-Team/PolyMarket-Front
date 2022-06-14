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

export const setUserToken = ({ accessToken, refreshToken, userId }) => {
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
};

export const setUserInfo = ({ userProfile }) => {
    localStorage.setItem("userInfo", JSON.stringify(userProfile));
};

export const getUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    return userInfo;
};

export const removeUserData = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userInfo");
};
