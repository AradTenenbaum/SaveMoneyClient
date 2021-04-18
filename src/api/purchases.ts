import axios from 'axios';

import {url} from '../constants/URL';
import {PurchasesType} from '../types/basicTypes';

export const getAll = (token: string, id: string) => axios.get(`${url}/purchase/myPurchases/${id}`, {
    headers: {
        'auth-token': token
    }
});

export const addPurchase = (token: string, purchase: PurchasesType) => axios.post(`${url}/purchase/add`, purchase, {
    headers: {
        'auth-token': token
    }
});

export const deletePurchase = (token: string, purchaseId: string) => axios.delete(`${url}/purchase/delete/${purchaseId}`, {
    headers: {
        'auth-token': token
    }
});

export const deleteAllPurchases = (token: string, id: string) => axios.delete(`${url}/purchase/deleteAll/${id}`, {
    headers: {
        'auth-token': token
    }
});