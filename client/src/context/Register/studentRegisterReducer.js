/* eslint-disable import/no-anonymous-default-export */

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    LOADING,
} from "../ActionTypes";

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                // ...action.payload,
                loading: false,
                success: true,
            };
        case LOGIN_SUCCESS:
            console.log("login ", action.payload);
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("token");
            console.log("error action payload ", action.payload);
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload,
            };
        case USER_LOADED:
            console.log("action reachd here ", action);
            const m = {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
            };
            console.log("mmm:::", m);
            return m;
        case LOADING:
            return {
                ...state,
                loading: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
                success: false,
            };
        default:
            return state;
    }
};