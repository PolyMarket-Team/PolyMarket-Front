import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import emailSlice from "./emailSlice";
import msgSlice from "./msgSlice";

const reducer = (state, action) => {
    return combineReducers({
        auth: authSlice,
        email: emailSlice,
        msg: msgSlice,
    })(state, action);
};

export default reducer;
