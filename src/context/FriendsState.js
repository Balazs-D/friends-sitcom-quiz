import React, { useReducer } from 'react';
import axios from 'axios';
import FriendsContext from './friendsContext';
import FriendsReducer from './friendsReducer';
import friends1 from '../assets/photos/friends1';
import friends2 from '../assets/photos/friends2';
import friends3 from '../assets/photos/friends3';

import {
  GET_MIXED_QUOTES,
  QUOTE_COUNTER,
  SOLO_SELECTION,
  MIX_ELECTION,
  NEXT_QUOTE,
  RESTART,
  CHECK_AND_DO,
  SET_LOADING,
  RESET_COUNTER,
  BUTTON_TEXT_ONE,
  BUTTON_TEXT_TWO,
  BUTTON_TEXT_THREE,
  ALL_QUOTES_SOLVED,
  NEXT_QUOTE_UPDATE_COUNTER,
  NEXT_CHARACTER,
  FILL_BUTTONS,
  HANDLE_WRONG_ANSWER,
  HANDLE_START
} from './types';

const FriendsState = props => {
  const initialState = {
    currentQuote: '',
    quotes: '',
    mixedQuotes: [],
    backgroundImage: `url(${friends1})`,
    currentCharacter: '',
    loading: false,
    counter: 0,
    solvedAllQuotes: true,
    characterMatch: true,
    restarted: false,
    friendsArray: ['Chandler', 'Rachel', 'Phoebe', 'Monica', 'Ross', 'Joey'],
    buttonOne: '',
    buttonTwo: '',
    buttonThree: '',
    buttonArray: [],
    infoArray: [
      {
        title: 'Its a quote quiz game to test your FRIENDS nerd level.',
       
        popupName: 'Whats going on?'
      },
      {
        title: 'Click on START to begin the game!',
        
        popupName: 'Step One'
      },
      {
        title: 'Select the right character!',
     
        popupName: 'Step Two'
      }
    ]
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

    console.log('GET MIXED QUOTES', state.currentQuote);
    await mixSelection();
    
    dispatch({ type: NEXT_QUOTE });


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
    const btThree = state.currentCharacter;
    let searchingOne = await soloSelection();
    let searchingTwo = await soloSelection();

    let btOne = state.friendsArray[searchingOne];
    let btTwo = state.friendsArray[searchingTwo];

    do {
      searchingOne = await soloSelection();
      searchingTwo = await soloSelection();
      btOne = state.friendsArray[searchingOne];
      btTwo = state.friendsArray[searchingTwo];
    } while (btTwo === btThree && btTwo === btOne && btOne === btThree);
  
    console.log('B1:', btOne, 'B2:', btTwo, 'B3:', state.currentCharacter, state.counter);
    
    let btArray = [btOne, btTwo]
    dispatch({ 
      type: FILL_BUTTONS,
      payload: btArray
    });

    console.log(state.buttonArray)
     
  };
  //   NEXT_QUOTE,
  const nextQuote = async e => {
    if (state.counter < 17) {
      await mixSelection();
      await nextQuoteUpdateCounter();
      dispatch({ type: NEXT_QUOTE });
    } else {
      // p: you won
      resetCounter();
    }

    console.log(state.currentQuote);
  };

  const restart = () => {
    resetCounter();
    getMixedQuotes();
  }

  //   CHECK_AND_DO;

  const checkAndDo = async e => {
  state.currentCharacter === e.target.value
      ? nextQuote()
      : handleWrongAnswer()

    console.log(e.target.value);
  };

  //   ALL_QUOTES_SOLVED
  const allQuotesSolved = () => ({ type: ALL_QUOTES_SOLVED });

  // SET_LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  // RESET_COUNTER
  const resetCounter = () => dispatch({ type: RESET_COUNTER });

  // HANDLE_WRONG_ANSWER 
  const handleWrongAnswer = () => dispatch({ type: HANDLE_WRONG_ANSWER })

  // NEXT_QUOTE_UPDATE_COUNTER
  const nextQuoteUpdateCounter = () => {
    if (state.counter === 18) {
      resetCounter();
    } else {
      dispatch({ type: NEXT_QUOTE_UPDATE_COUNTER });
    }
  };

  // HANDLE_ABOUT

  // HANDLE_START
  const handleStart = async () => {
    await getMixedQuotes();
    await resetCounter();
    await dispatch({ type: HANDLE_START, backgroundImage: `url(${friends2})` });
    

  }

  // HANDLE_CREDITS

 

  return (
    <FriendsContext.Provider
      value={{
        currentQuote: state.currentQuote,
        quotes: state.quotes,
        mixedQuotes: state.mixedQuotes,
        backgroundImage: state.backgroundImage,
        currentCharacter: state.currentCharacter,
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
        restart,
        handleWrongAnswer,
        checkAndDo,
        handleStart,
        buttonOne: state.buttonOne,
        buttonTwo: state.buttonTwo,
        buttonThree: state.buttonThree,
        allQuotesSolved,
        buttonArray: state.buttonArray,
        infoArray: state.infoArray
      }}
    >
      {props.children}
    </FriendsContext.Provider>
  );
};

export default FriendsState;
