import {LOGIN, LOGOUT, REGISTER} from '../constants/actionTypes';
import type {UserAction} from '../types/actionsType';
import { UserType } from '../types/basicTypes';

// Reducer user - redux
const reducer = (user: UserType = null, action: UserAction) => {
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