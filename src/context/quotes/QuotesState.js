import { useReducer } from 'react';
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
}