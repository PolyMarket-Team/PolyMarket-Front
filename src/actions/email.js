import {
    SEND_EMAIL_SUCCESS,
    SEND_EMAIL_FAIL,
    EMAIL_VERIFICATION_SUCCESS,
    EMAIL_VERIFICATION_FAIL,
    SET_MESSAGE,
} from "./types";

import * as AuthService from "@services/auth-service";

export const sendemail = (email) => (dispatch) => {
    return AuthService.sendemail(email).then(
        (response) => {
            console.log(response.data.data);
            dispatch({
                type: SEND_EMAIL_SUCCESS,
                payload: {
                    expirationTime: response.data.data.expireDateTime,
                },
            });

            return Promise.resolve();
        },
        (error) => {
            const message = error.message;
            dispatch({
                type: SEND_EMAIL_FAIL,
            });
            dispatch({ type: SET_MESSAGE, payload: message });
            return Promise.reject();
        }
    );
};

export const confirmemail = (data) => (dispatch) => {
    return AuthService.confirmemail(data).then(
        (response) => {
            console.log(response);
            dispatch({ type: EMAIL_VERIFICATION_SUCCESS });
        },
        (error) => {
            dispatch({ type: EMAIL_VERIFICATION_FAIL });
        }
    );
};
