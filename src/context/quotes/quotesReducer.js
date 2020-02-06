import {
    GET_MIXED_QUOTES,
    QUOTE_COUNTER,
    RESTART_GAME,
    SOLO_SELECTION,
    MIX_SELECTION,
    NEXT_QUOTE,
    CHECK_AND_DO,
} from '../types';

export default (state, action) => {

    switch(action.type){

        case GET_MIXED_QUOTES: 
        return{
            quotes
            loading: false,
             
        }

        default:
            return state;
    }
}