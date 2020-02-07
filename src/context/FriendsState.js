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
  SET_LOADING,
  RESET_COUNTER,
  BUTTON_TEXT_ONE,
  BUTTON_TEXT_TWO,
  BUTTON_TEXT_THREE,
  ALL_QUOTES_SOLVED,
  NEXT_QUOTE_UPDATE_COUNTER
} from './types';
import friendsContext from './friendsContext';

const FriendsState = props => {
  const initialState = {
    CurrentQuote: '',
    quotes: '',
    mixedQuotes: [],
    backgroundImage: `url(${friends1})`,
    character: '',
    loading: false,
    counter: 0,
    solvedAllQuotes: true,
    characterMatch: true,
    restarted: false,
    friendsArray: ['Chandler', 'Rachel', 'Phoebe', 'Monica', 'Ross', 'Joey'],
    buttonOne: 'BOBBY',
    buttonTwo: '',
    buttonThree: ''
  };

  const [state, dispatch] = useReducer(FriendsReducer, initialState);

  //   GET_MIXED_QUOTES,
  const getMixedQuotes = async () => {
    setLoading();
    const res = await axios.get(
      'https://friends-quotes-api.herokuapp.com/quotes'
    );

    let fetchedData = res.data;

    let randomQuotes = await fetchedData
      .map(a => ({
        sort: Math.random(),
        value: a
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);

    console.log(randomQuotes);

    dispatch({
      type: GET_MIXED_QUOTES,
      payload: randomQuotes
    });

    console.log('getMixedQuotes Function');
  };

  //   QUOTE_COUNTER,
  const quoteCounter = e => {
    state.counter === 17 ? resetCounter() : nextQuote();
  };

  //   SOLO_SELECTION,
  const soloSelection = () => {
    const soloSel = Math.floor(Math.random() * 5);
    return soloSel;
  };

  //   MIX_SELECTION,
  const mixSelection = async e => {
    let searchingOne = await soloSelection();
    let searchingTwo = await soloSelection();
    let btThree = 'Ross';

    let btOne = state.friendsArray[searchingOne];
    let btTwo = state.friendsArray[searchingTwo];

    do {
      let searchingOne = await soloSelection();
      let searchingTwo = await soloSelection();
      btOne = state.friendsArray[searchingOne];
      btTwo = state.friendsArray[searchingTwo];
    } while (btTwo === btThree || btTwo === btOne || btOne === btThree);

    await buttonTextOne(btOne);
    await buttonTextTwo(btTwo);
    await buttonTextThree(btThree);

    dispatch(
      {
        type: BUTTON_TEXT_ONE,
        payload: btOne
      },
      {
        type: BUTTON_TEXT_TWO,
        payload: btTwo
      },
      {
        type: BUTTON_TEXT_THREE,
        payload: btThree
      }
    );

    console.log(btOne, btTwo, btThree, searchingOne, searchingTwo);
    console.log(state.friendsArray);
  };
  //   NEXT_QUOTE,
  const nextQuote = async e => {
    if (state.counter !== 17) {
      await mixSelection();
      await nextQuoteUpdateCounter();
      dispatch({ type: NEXT_QUOTE });
    } else {
      resetCounter();
    }

    console.log(state.CurrentQuote);
  };

  //   CHECK_AND_DO;

  //   ALL_QUOTES_SOLVED
  const allQuotesSolved = () => ({ type: ALL_QUOTES_SOLVED });

  // SET_LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  // RESET_COUNTER
  const resetCounter = () => dispatch({ type: RESET_COUNTER });

  // NEXT_QUOTE_UPDATE_COUNTER
  const nextQuoteUpdateCounter = () =>
    dispatch({ type: NEXT_QUOTE_UPDATE_COUNTER });

  // BUTTON_ONE / BUTTON_TWO / BUTTON_THREE

  const buttonTextOne = () => dispatch({ type: BUTTON_TEXT_ONE });
  const buttonTextTwo = () => dispatch({ type: BUTTON_TEXT_TWO });
  const buttonTextThree = () => dispatch({ type: BUTTON_TEXT_THREE });

  return (
    <FriendsContext.Provider
      value={{
        currentQuote: state.currentQuote,
        quotes: state.quotes,
        mixedQuotes: state.mixedQuotes,
        backgroundImage: state.backgroundImage,
        character: state.character,
        loading: state.loading,
        counter: state.counter,
        solvedAllQuotes: state.solvedAllQuotes,
        characterMatch: state.characterMatch,
        restarted: state.restarted,
        friendsArray: state.friendsArray,
        getMixedQuotes,
        quoteCounter,
        resetCounter,
        nextQuote,
        nextQuoteUpdateCounter,
        soloSelection,
        mixSelection,
        buttonOne: state.buttonOne,
        buttonTwo: state.buttonTwo,
        buttonThree: state.buttonThree,
        buttonTextOne,
        buttonTextTwo,
        buttonTextThree,
        allQuotesSolved
      }}
    >
      {props.children}
    </FriendsContext.Provider>
  );
};

export default FriendsState;
