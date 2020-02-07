import React, { useState, useEffect, useContext } from 'react';
import '../assets/scss/style.scss';
import Quote from './Quote';
import Restart from './Restart';
import Timer from './Timer';
import GameOver from './GameOver';
import Loader from './Loader';
import ChoiceButtons from './ChoiceButtons';
import FriendsContext from '../context/friendsContext'



const Game = ({  quotes, mixedQuotes })=> {
  const friendsContext = useContext(FriendsContext);
  const [ counter, setCounter ] = useState(0);
  const [ solvedAllQuotes, setSolvedAllQuotes ] = useState(false);
  const [ characterMatch, setCharacterMatch ] = useState(true);
  
 

useEffect(() => { 
  async function Init(){
    await friendsContext.getMixedQuotes();
    await setSolvedAllQuotes(true);
    //eslint-disable-next-line
  }
 
}, []);
    
    
  

  // const randomizer = Math.floor(Math.random() * Object.keys(this.state.friendsArray).length)

  
// onClick button 
  const quoteCounter = e => {


    const resetCounter = (e) => {
      setCounter(0);
      setSolvedAllQuotes(true)
    }

    const nextQuote = (e) => {
      setCounter(prevState => {
          return {counter: prevState.counter + 1}
    });


    counter === 18 ? resetCounter() : nextQuote();
  }};

  



  // const soloSelection = () => {
  //   const soloSel = Math.floor(Math.random() * friendsArray.length);
  //   return soloSel;
  // };

  // const mixSelection = async (e) => {
  //   const searchingOne = await soloSelection();
  //   const searchingTwo = await soloSelection();

  //   let btThree = mixedQuotes.character;
  //   let btOne = friendsArray[searchingOne];
  //   let btTwo = friendsArray[searchingTwo];

  //   do {
  //     const searchingOne = await soloSelection();
  //     const searchingTwo = await soloSelection();
  //     btOne = friendsArray[searchingOne];
  //     btTwo = friendsArray[searchingTwo];
  //   } while (btTwo === btThree || btTwo === btOne || btOne === btThree);

  //   await setState(prevState => ({
  //     ...prevState,
  //     buttonOne: btOne,
  //     buttonTwo: btTwo,
  //     buttonThree: btThree
  //   }));

  //   console.log(btOne, btTwo, btThree, searchingOne, searchingTwo);
  // };

  // const nextQuote = async e => {
  //       await mixSelection();

  //   await quoteCounter();
   
    
  // // };

  // const checkAndDo = async e => {
  //   mixedQuotes.character === e.target.value
  //     ? nextQuote()
  //     : setCharacterMatch(false);

  //   console.log(e.target.value);
  // };



  
    // const { quotes, mixedQuotes } = this.props;
    // const {
    //   counter,
    //   solvedAllQuotes,
    //   printTest
    // } = this.state;

    return (
      <div
        className='game-view mx-auto'
        // style={{ backgroundImage: this.state.backgroundImage }}
      >
        {characterMatch === true ? (
          <Quote
            quotes={quotes}
            counter={counter}
            mixedQuotes={mixedQuotes[counter]}
            quoteCounter={quoteCounter}
            solvedAllQuotes={solvedAllQuotes}
          />
        ) : (
          <GameOver />
        )}
        <Timer />

        {counter === 18 ? (
          <Restart
           
            quoteCounter={quoteCounter}
            counter={counter}
            solvedAllQuotes={solvedAllQuotes}
            // resetCounter={resetCounter}
          />
        ) : (
          <ChoiceButtons
            quoteCounter={quoteCounter}
            mixedQuotes={mixedQuotes[counter]}
            
          />
        )}
      </div>
    );
  
}

export default Game;