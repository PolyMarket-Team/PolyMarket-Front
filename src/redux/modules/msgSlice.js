import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: {},
};

const msgSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        showModal(state, action) {
            state.message = action.payload;
        },
    },
});

export const { showModal } = msgSlice.actions;

export default msgSlice.reducer;
