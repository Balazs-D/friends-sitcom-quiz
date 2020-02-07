import React, { useReducer } from 'react';
import axios from 'axios';
import FriendsContext from './friendsContext';
import FriendsReducer from './friendsReducer';
import friends1 from '../assets/photos/friends1';

import {
GET_MIXED_QUOTES,
QUOTE_COUNTER,
SOLO_SELECTION,
MIX_ELECTION,
NEXT_QUOTE,
CHECK_AND_DO,
SET_LOADING
} from './types';
import { bool, number } from 'prop-types';
import { stat } from 'fs';

const FriendsState = props => {
    const initialState = {
      quote: '',
      quotes: '',
      mixedQuotes: [],
      backgroundImage: `url(${friends1})`,
      character: '',
      loading: false,
      counter: 0,
      solvedAllQuotes: bool,
      characterMatch: bool,
      restarted: bool
    };

    const [state, dispatch] = useReducer(FriendsReducer, initialState);


    //   GET_MIXED_QUOTES,
    const getMixedQuotes = async () => {
        setLoading();
      const res = await axios.get(
        'https://friends-quotes-api.herokuapp.com/quotes'
      );
    

      let randomQuotes = await res.data
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value);

      console.log(randomQuotes);
     
      dispatch({
          type: GET_MIXED_QUOTES,
          payload: randomQuotes
      })
    };

    //   QUOTE_COUNTER,
    //   SOLO_SELECTION,
    //   MIX_ELECTION,
    //   NEXT_QUOTE,
    //   CHECK_AND_DO;

    // SET_LOADING
    const setLoading= () => dispatch({ type: SET_LOADING })

    return <FriendsContext.Provider
    value={{
        quote: state.quote,
        quotes: state.quotes,
        mixedQuotes: state.mixedQuotes,
        backgroundImage: state.backgroundImage,
        character: state.character,
        loading: state.loading,
        counter: state.counter,
        solvedAllQuotes: state.solvedAllQuotes,
        characterMatch: state.characterMatch,
        restarted: state.restarted,
        getMixedQuotes,

    }}>


{props.children}
    </FriendsContext.Provider>
}

export default FriendsState