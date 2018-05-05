import { FETCH_SINGLE_VINO } from '../actions/types';

export default (state = null, action) => {
    // console.log(action);
    switch (action.type) {
        case FETCH_SINGLE_VINO:
            // if empty return false!!!
            return action.payload;
        default:
            return state;
    }
}