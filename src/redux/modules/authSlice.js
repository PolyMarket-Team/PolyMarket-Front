import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as TokenService from "@services/token-service";
import * as authApi from "@api/authApi";

const initialState = {
    isLogin: false,
    userInfo: null,
    errorMessage: "",
};

export const register = createAsyncThunk(
    "auth/register",
    async (formData, { rejectWithValue }) => {
        try {
            const response = authApi.signup(formData);
            console.log(response);
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async (formData, { rejectWithValue }) => {
        try {
            const response = authApi.signin(formData);
            const { accessToken, refreshToken } = response.data;
            TokenService.setUserData(accessToken, refreshToken);
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // isLoggedin(state, action) {
        //     state.isLogin = action.payload;
        // },
        // logOut(state, action) {
        //     TokenService.removeUser();
        //     state.isLogin = false;
        //     state.userInfo = null;
        // },
        // // 유저 닉네임 변경
        // setUserNickname(state, action) {
        //     state.userInfo.nickname = action.payload;
        // },
        // // 유저 프로필 이미지 변경
        // setUserProfileImage(state, action) {
        //     state.userInfo.profileImageUrl = action.payload;
        // },
    },
    extraReducers: (builder) => {},
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
