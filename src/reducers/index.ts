import {combineReducers} from 'redux';

import purchase from './purchase';
import user from './user';

// Combine Reducers - redux
export default combineReducers({purchase, user});