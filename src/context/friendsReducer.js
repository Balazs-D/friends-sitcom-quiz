import {
  GET_MIXED_QUOTES,
  QUOTE_COUNTER,
  SOLO_SELECTION,
  MIX_ELECTION,
  NEXT_QUOTE,
  CHECK_AND_DO,
  SET_LOADING
} from './types';


export default (state, action) => {
    switch(action.type){

        case GET_MIXED_QUOTES:
            return{
                ...state,
                mixedQuotes: action.payload,
                loading: false
            }


                 
        case SET_LOADING:
            return{
                // Copy everything in the current state
                ...state,
                loading: true
            }

        default:
            return state;
    }
}