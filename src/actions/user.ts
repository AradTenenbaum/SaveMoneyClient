import {LOGIN, REGISTER, LOGOUT} from '../constants/actionTypes';
import * as api from '../api/user';
import { UserType } from '../types/basicTypes';

export const register = (user: UserType) => async (dispatch: any) => {
    try {
        await api.register(user);
        dispatch({type: REGISTER, payload: user});
    } catch (error) {
        console.log(error.response);
    }
};

export const login = (user: UserType) => async (dispatch: any) => {
    try {
        const {data: userData} = await api.login(user);
        localStorage.setItem("jwtToken", userData.token);
        dispatch({type: LOGIN, payload: userData});
    } catch (error) {
        console.log(error.response);   
    }
};

export const logout = () => async (dispatch: any) => {
    localStorage.removeItem("jwtToken");
    dispatch({type: LOGOUT});
};