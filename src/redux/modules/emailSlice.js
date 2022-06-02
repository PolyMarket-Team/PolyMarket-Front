import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as emailApi from "@api/emailApi";
import { toast } from "react-toastify";

const initialState = {
    sendAuthCodeState: "READY",
    confirmAuthCodeState: "READY",
    isAutheticated: false,
    codeExpirationState: false,
    message: "",
    expirationTime: "",
};
export const sendAuthCode = createAsyncThunk(
    "auth/sendAuthCode",
    async (email, { rejectWithValue }) => {
        try {
            const response = await emailApi.sendemail(email);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);

export const confirmAuthCode = createAsyncThunk(
    "auth/confirmAuthCode",
    async (authCode, { rejectWithValue }) => {
        try {
            const response = emailApi.confirmemail(authCode);
            console.log(response);
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const emailSlice = createSlice({
    name: "email",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendAuthCode.pending, (state) => {
            state.sendAuthCodeState = "LOADING";
        });
        builder.addCase(sendAuthCode.fulfilled, (state, action) => {
            state.sendAuthCodeState = "SUCCESS";
            state.message = action.payload.message;
            state.expirationTime = action.payload.data.expireDateTime;
        });
        builder.addCase(sendAuthCode.rejected, (state, action) => {
            state.sendAuthCodeState = "ERROR";
            state.message = action.payload;
        });
        builder.addCase(confirmAuthCode.pending, (state) => {
            state.confirmAuthCodeState = "LOADING";
        });
        builder.addCase(confirmAuthCode.fulfilled, (state, action) => {
            state.confirmAuthCodeState = "SUCCESS";
            state.message = action.payload;
        });
        builder.addCase(confirmAuthCode.rejected, (state, action) => {
            state.confirmAuthCodeState = "ERROR";
            state.message = action.payload;
        });
    },
});

export default emailSlice.reducer;
