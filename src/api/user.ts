import axios from 'axios';

import {url} from '../constants/URL';
import { UserType } from '../types/basicTypes';

export const register = (user: UserType) => axios.post(`${url}/user/register`, user);
export const login = (user: UserType) => axios.post(`${url}/user/login`, user);