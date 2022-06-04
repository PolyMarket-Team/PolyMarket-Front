import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as emailApi from "@api/emailApi";

const initialState = {
    sendAuthCodeState: "READY",
    confirmAuthCodeState: "READY",
    codeExpirationState: false,
    timerState: false,
    isAutheticated: false,
    emailMessage: "",
    expirationTime: "",
};

export const sendAuthCode = createAsyncThunk(
    "auth/sendAuthCode",
    async (email, { rejectWithValue }) => {
        try {
            const response = await emailApi.sendemail(email);
            console.log(response);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const confirmAuthCode = createAsyncThunk(
    "auth/confirmAuthCode",
    async (authCode, { rejectWithValue }) => {
        try {
            const response = await emailApi.confirmemail(authCode);

            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const emailSlice = createSlice({
    name: "email",
    initialState,
    reducers: {
        isCodeExpired(state, action) {
            state.codeExpirationState = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(sendAuthCode.pending, (state) => {
            state.sendAuthCodeState = "LOADING";
        });
        builder.addCase(sendAuthCode.fulfilled, (state, action) => {
            state.sendAuthCodeState = "SUCCESS";
            state.emailMessage = action.payload.message;
            state.timerState = true;
            state.expirationTime = action.payload.data.expireDateTime;
        });
        builder.addCase(sendAuthCode.rejected, (state, action) => {
            state.sendAuthCodeState = "ERROR";
            state.emailMessage = action.payload.message;
        });
        builder.addCase(confirmAuthCode.pending, (state) => {
            state.confirmAuthCodeState = "LOADING";
        });
        builder.addCase(confirmAuthCode.fulfilled, (state, action) => {
            state.confirmAuthCodeState = "SUCCESS";
            state.emailMessage = action.payload.message;
            state.timerState = false;
            state.isAutheticated = true;
        });
        builder.addCase(confirmAuthCode.rejected, (state, action) => {
            state.confirmAuthCodeState = "ERROR";
            state.timerState = false;
            state.emailMessage = action.payload.message;
        });
    },
});
export const { isCodeExpired } = emailSlice.actions;
export default emailSlice.reducer;
