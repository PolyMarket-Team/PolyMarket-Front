import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as TokenService from "@services/token-service";
import * as authApi from "@api/authApi";

const initialState = {
    isLogin: false,
    userInfo: null,
    authMessage: "",
    fetchRegisterState: "",
    fetchLoginState: "",
    isRegistCompleted: false,
};

export const register = createAsyncThunk(
    "auth/register",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await authApi.signup(formData);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await authApi.signin(formData);
            const userId = response.data.data.userId;
            const userInfo = await authApi.getUserData(userId);
            return { response: response.data, userInfo: userInfo.data.data };
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut(state, action) {
            TokenService.removeUserData();
            state.isLogin = false;
            state.userInfo = null;
        },
        // 유저 닉네임 변경
        setUserNickname(state, action) {
            state.userInfo.nickname = action.payload;
        },
        // 유저 프로필 이미지 변경
        setUserProfileImage(state, action) {
            state.userInfo.profileImageUrl = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.fetchRegisterState = "LOADING";
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.fetchRegisterState = "SUCCESS";
            state.authMessage = action.payload.message;
            state.isRegistCompleted = true;
        });
        builder.addCase(register.rejected, (state, action) => {
            state.fetchRegisterState = "ERROR";
            state.authMessage = action.payload.message;
        });
        builder.addCase(login.pending, (state) => {
            state.fetchLoginState = "LOADING";
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLogin = true;
            state.fetchLoginState = "SUCCESS";
            state.authMessage = action.payload.response.message;
            state.userInfo = action.payload.userInfo;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.fetchLoginState = "ERROR";
            state.authMessage = action.payload.message;
        });
    },
});

export const { logOut, setUserNickname, setUserProfileImage } =
    authSlice.actions;
export default authSlice.reducer;
