import React, { useReducer } from 'react';
import axios from 'axios';
import QuotesContext from './quotesContext';
import QuotesReducer from './quotesReducer';
import friends1 from '/home/dci/DCI/lord-of-the-script/react/friend-sitcom-quiz/src/assets/photos/friends1';


import {
    GET_MIXED_QUOTES,
    QUOTE_COUNTER,
    RESTART_GAME,
    SOLO_SELECTION,
    MIX_SELECTION,
    NEXT_QUOTE,
    CHECK_AND_DO,

} from '../types';

const QuoteState = props => {
    const initialState = {
      quotes: '',
      quote: '',
      mixedQuotes: [],
      backgroundImage: `url(${friends1})`,
      character: '',
      loading: false,
      counter: 0,
      solvedAllQuotes: false,
      characterMatch: true,

    };

    const [ state, dispatch ] = useReducer(QuotesReducer, initialState)

    // Get Mixed Qutes
    

    const getMixedQuotes = async () => {
    setLoading(true);
    await this.setState( loading => ({loading: true}))
    const res = await axios.get(
      'https://friends-quotes-api.herokuapp.com/quotes'
    );
    setQuotes( res.data );

     let randomQuotes = await res.data
       .map(a => ({ sort: Math.random(), value: a }))
       .sort((a, b) => a.sort - b.sort)
       .map(a => a.value);

     setMixedQuotes(randomQuotes);

     console.log(QuotesContext.randomQuotes);
     console.log(QuotesContext.mixedQuotes);

    dispatch({
        type: GET_MIXED_QUOTES,
        payload: res.data
        });

}

return (
    <QuotesContext.Provider
    value={{
        quotes: state.quotes,
      quote: state.quote,
      mixedQuotes: state.mixedQuotes,
      backgroundImage: state.backgroundImage,
      character: state.character,
      loading: state.loading,
      counter: state.counter,
      solvedAllQuotes: state.solvedAllQuotes,
      characterMatch: state.characterMatch,
      getMixedQuotes,


     }}>


    </QuotesContext.Provider>
)

};

export default QuoteState