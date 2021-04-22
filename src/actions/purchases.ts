import {GET_ALL, ADD, DELETE_ALL, DELETE} from '../constants/actionTypes';
import * as api from '../api/purchases';
import {PurchasesType} from '../types/basicTypes';

export const getAll = (token: string, id: string) => async (dispatch: any) => {
    try {
        const {data} = await api.getAll(token, id);
        dispatch({type: GET_ALL, list: data});
    } catch (error) {
        console.log(error);
    }
};

export const addPurchase = (token: string, purchase: PurchasesType) => async (dispatch: any) => {
    try {
        const {data} = await api.addPurchase(token, purchase);
        dispatch({type: ADD, one: data});
    } catch (error) {
        console.log(error);
    }
};

export const deletePurchase = (token: string, purchaseId: string) => async (dispatch: any) => {
    try {
        await api.deletePurchase(token, purchaseId);
        dispatch({type: DELETE, one: purchaseId});
    } catch (error) {
        console.log(error);
    }
};

export const deleteAllPurchases = (token: string, id: string) => async (dispatch: any) => {
    try {
        await api.deleteAllPurchases(token, id);
        dispatch({type: DELETE_ALL});
    } catch (error) {
        console.log(error);
    }
};