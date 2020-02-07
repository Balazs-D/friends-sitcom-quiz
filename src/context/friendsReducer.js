import {
  GET_MIXED_QUOTES,
  QUOTE_COUNTER,
  SOLO_SELECTION,
  MIX_ELECTION,
  NEXT_QUOTE,
  NEXT_QUOTE_UPDATE_COUNTER,
  CHECK_AND_DO,
  SET_LOADING,
  RESET_COUNTER,
  BUTTON_ONE,
  BUTTON_TWO,
  BUTTON_THREE,
  BUTTON_TEXT_ONE,
  BUTTON_TEXT_TWO,
  BUTTON_TEXT_THREE,
  ALL_QUOTES_SOLVED
} from './types';


export default (state, action) => {
    switch (action.type) {
      case GET_MIXED_QUOTES:
        return {
          ...state,
          mixedQuotes: action.payload,
          loading: false
        };

      case RESET_COUNTER:
        return {
          ...state,
          counter: 0,
          solvedAllQuotes: true
        };

      case NEXT_QUOTE_UPDATE_COUNTER:
        return {
          ...state,
          counter: state.counter + 1
        };
      
      case NEXT_QUOTE:
        return{
          ...state,
          currentQuote: state.mixedQuotes[state.counter].quote
        }

      case BUTTON_TEXT_ONE:
        return {
          ...state,
          buttonOne: action.payload
        };

      case BUTTON_TEXT_TWO:
        return {
          ...state,
          buttonTwo: action.payload
        };

      case BUTTON_TEXT_THREE:
        return {
          ...state,
          buttonThree: action.payload
        };

      case SET_LOADING:
        return {
          // Copy everything in the current state
          ...state,
          loading: true
        };

      case ALL_QUOTES_SOLVED:
          return{
              ...state,
              solvedAllQuotes: true
          }

      default:
        return state;
    }
}