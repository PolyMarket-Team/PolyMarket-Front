import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "./types";

import * as AuthService from "@services/auth-service";

export const signup = (nickname, email, password) => (dispatch) => {
    return AuthService.signup(nickname, email, password).then(
        (response) => {
            console.log(response);
            dispatch({
                type: REGISTER_SUCCESS,
            });
        },
        (error) => {
            console.log(error);
            const message = error?.response?.data?.message;
            dispatch({
                type: REGISTER_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });
            return Promise.reject();
        }
    );
};

export const login = (formData) => (dispatch) => {
    return AuthService.signin(formData).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message = error?.response?.data?.message;

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};
