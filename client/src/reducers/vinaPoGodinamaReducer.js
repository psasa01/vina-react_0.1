import { VINA_PO_GODINAMA } from '../actions/types';

export default (state = null, action) => {
    // console.log(action);
    switch (action.type) {
        case VINA_PO_GODINAMA:
            // if empty return false!!!
            return action.payload;
        default:
            return state;
    }
}