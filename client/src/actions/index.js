import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {

    // if reduxThunk middleware sees that we returning function
    // it will automaticaly call this function and pass dispatch as an argument!!
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

