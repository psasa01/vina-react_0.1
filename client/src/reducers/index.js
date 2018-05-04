import { combineReducers } from 'redux';
import authReducer from './authReducer';
import vinoReducer from './vinoReducer';

export default combineReducers({
    // whatever we put inside represents a key that exists inside state 
    auth: authReducer,
    vina: vinoReducer
});