// import React, { useReducer } from "react";
// import uuid from "uuid";
// import contactContext from "./ContactContext";
// import ContactReducer from "./ContactReducer";

import React, { useReducer } from "react";
import axios from "axios";
import studentRegisterContext from "./studentRegisterContext";
import studentRegisterReducer from "./studentRegisterReducer";
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
import { v4 as uuidv4 } from "uuid";
import { setAuthToken } from "../../utils/SetAuthToken";

const StudentRegisterState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        isAuthenticated: null,
        loading: false,
        user: null,
        error: null,
        success: false,
    };

    const [state, dispatch] = useReducer(studentRegisterReducer, initialState);

    // @RULE : REGISTER STUDENT
    const register = async(FormData) => {
        dispatch({ type: LOADING, payload: true });
        console.log("reached here ", FormData);
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.post(
                "http://localhost:8000/api/auth/register",
                FormData,
                config
            );
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
            // loadUser();
        } catch (error) {
            console.log("error in failure ", error.response.data);
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.message || error.response.data.error,
            });
        }
    };

    const loadUser = async() => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        try {
            const res = await axios.get("http://localhost:8000/api/auth/user");
            console.log("response is", res);
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
            console.log('authenticated::!11 ', state.isAuthenticated)
            console.log('user is :', state.user)
        } catch (error) {
            console.log("load error ", error.response);
            dispatch({ type: AUTH_ERROR });
        }
    };

    // Login Users
    const login = async(FormData) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const res = await axios.post(
                "http://localhost:8000/api/auth/login",
                FormData,
                config
            );
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
            loadUser();
        } catch (error) {
            console.log("error data", error.response);
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.message || error.response.data.error,
            });
        }
    };

    // Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

    // logout
    const logout = () => {
        console.log('reached to logout')
        return dispatch({ type: LOGOUT })
    };

    console.log('state::', state)

    return ( <
        studentRegisterContext.Provider value = {
            {
                register,
                error: state.error,
                clearErrors,
                isAuthenticated: state.isAuthenticated,
                loadUser,
                user: state.user,
                token: state.token,
                login,
                logout,
                loading: state.loading,
                success: state.success,
            }
        } > { console.log("isss:", state.isAuthenticated) } { " " } { props.children } { " " } <
        /studentRegisterContext.Provider>
    );
};

export default StudentRegisterState;