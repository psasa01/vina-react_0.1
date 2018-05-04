import { FETCH_VINA } from '../actions/types';

export default (state = null, action) => {
    // console.log(action);
    switch (action.type) {
        case FETCH_VINA:
            // if empty return false!!!
            return action.payload || false;
        default:
            return state;
    }
}