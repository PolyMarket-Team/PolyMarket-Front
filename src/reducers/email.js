import {
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_FAIL,
    EMAIL_VERIFICATION_SUCCESS,
    EMAIL_VERIFICATION_FAIL,
    SET_CODE_IS_EXPIRE,
} from "@actions/types";

const initialState = {
    isCodeExpire: false,
    isEmailSent: false,
    isEmailVerified: false,
};

const emailReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CODE_IS_EXPIRE:
            return { ...state, isCodeExpire: true };

        case SEND_EMAIL_SUCCESS:
            return {
                ...state,
                isEmailSent: true,
                expirationTime: payload.expirationTime,
            };

        case SEND_EMAIL_FAIL:
            return { ...state, isEmailSent: false };

        case EMAIL_VERIFICATION_SUCCESS:
            return { ...state, isEmailVerified: true };

        case EMAIL_VERIFICATION_FAIL:
            return { ...state, isEmailVerified: false };

        default:
            return state;
    }
};
export default emailReducer;
