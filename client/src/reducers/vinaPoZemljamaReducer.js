import { VINA_PO_ZEMLJAMA } from '../actions/types';

export default (state = null, action) => {
    // console.log(action);
    switch (action.type) {
        case VINA_PO_ZEMLJAMA:
            // if empty return false!!!
            return action.payload;
        default:
            return state;
    }
}