import {GET_ALL, ADD, DELETE, DELETE_ALL} from '../constants/actionTypes';
import { PurchaseAction } from '../types/actionsType';
import { PurchasesType } from '../types/basicTypes';

const reducer = (purcheses:PurchasesType[] = [], action: PurchaseAction) => {
    switch(action.type){
        case GET_ALL:
            return action.list;
        case ADD:
            return [...purcheses, action.one];
        case DELETE:
            return purcheses.filter((purchase) => purchase._id !== action.one);
        case DELETE_ALL:
            return [];
        default:
            return purcheses;
    };
};

export default reducer;
