import { MOJA_KOLEKCIJA_VINA } from '../actions/types';

export default (state = null, action) => {
    // console.log(action);
    switch (action.type) {
        case MOJA_KOLEKCIJA_VINA:
            // if empty return false!!!
            return action.payload;
        default:
            return state;
    }
}