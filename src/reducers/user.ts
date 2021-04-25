import {LOGIN, LOGOUT, REGISTER} from '../constants/actionTypes';
import type {UserAction} from '../types/actionsType';
import { UserType } from '../types/basicTypes';
import jwtDecode from 'jwt-decode';

let initialState: UserType = null;

if(localStorage.getItem("jwtToken")){
    const decodedToken: {user : {_id?: string, username: string, password: string}, _doc: {_id?: string, username: string, password: string}} = jwtDecode(<string>localStorage.getItem("jwtToken"));
    console.log(decodedToken)
    initialState = {
        user: decodedToken.user ? decodedToken.user : decodedToken._doc,
        token: localStorage.getItem("jwtToken")
    };
}

// Reducer user - redux
const reducer = (user: UserType = initialState, action: UserAction) => {
    switch(action.type){
        case REGISTER:
            return action.payload;
        case LOGIN:
            return action.payload;
        case LOGOUT:
            return null;
        default:
            return user;
    }
};

export default reducer;