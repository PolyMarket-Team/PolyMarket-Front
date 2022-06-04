import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import emailSlice from "./emailSlice";
import notiSlice from "./notiSlice";

const reducer = (state, action) => {
    return combineReducers({
        auth: authSlice,
        email: emailSlice,
        noti: notiSlice,
    })(state, action);
};

export default reducer;
