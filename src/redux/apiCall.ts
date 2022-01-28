import { loginFailure, loginStart, loginSuccess, logOutStart, signupStart } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const signup = async (dispatch, user) => {
    dispatch(signupStart());
    try {
        const res = await publicRequest.post("/auth/signup", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};


export const logout = async (dispatch) =>  {
    dispatch(logOutStart());
}

