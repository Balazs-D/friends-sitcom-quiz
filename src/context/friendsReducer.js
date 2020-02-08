import {
  GET_MIXED_QUOTES,
  QUOTE_COUNTER,
  SOLO_SELECTION,
  MIX_ELECTION,
  NEXT_QUOTE,
  NEXT_CHARACTER,
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
  ALL_QUOTES_SOLVED,
  FILL_BUTTONS,
  HANDLE_WRONG_ANSWER
} from './types';


export default (state, action) => {
    switch (action.type) {
      case GET_MIXED_QUOTES:
        return {
          ...state,
          mixedQuotes: action.payload,
          loading: false,
          characterMatch: true,
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
          currentQuote: state.mixedQuotes[state.counter].quote,
          currentCharacter: state.mixedQuotes[state.counter].character,    
        };

      case FILL_BUTTONS:
        return{
          ...state,
          buttonArray: action.payload,
        }

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
          };

       case HANDLE_WRONG_ANSWER:
         return{
           ...state,
           characterMatch: false,
           counter: 17
         }

      

      default:
        return state;
    }
}