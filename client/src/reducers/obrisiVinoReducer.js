import { OBRISI_VINO } from '../actions/types';

export default (state = null, action) => {
    // console.log(action);
    switch (action.type) {
        case OBRISI_VINO:
            // if empty return false!!!
            return action.payload;
        default:
            return state;
    }
}