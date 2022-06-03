import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notiState: false,
    notiType: "",
    notiMessage: "",
};

const notiSlice = createSlice({
    name: "noti",
    initialState,
    reducers: {
        setNotification(state, action) {
            state.notiState = action.payload.notiState;
            state.notiType = action.payload.notiType;
            state.notiMessage = action.payload.notiMessage;
        },
        reset(state) {
            Object.assign(state, initialState);
        },
    },
});

export const { setNotification, reset } = notiSlice.actions;

export default notiSlice.reducer;
