import type {PurchasesType, UserType} from './basicTypes';

export type UserAction = {
    type: ('LOGIN' | 'LOGOUT' | 'REGISTER');
    payload: (UserType | {user: UserType, token: string} | undefined);
}

export type PurchaseAction = {
    type: ('GET_ALL' | 'ADD' | 'DELETE' | 'DELETE_ALL');
    list: (PurchasesType[]);
    one: (PurchasesType | string);
}