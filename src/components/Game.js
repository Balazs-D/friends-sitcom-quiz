import React, { useEffect, useContext } from 'react';
import '../assets/scss/style.scss';
import Quote from './Quote';
import Restart from './Restart';
import Timer from './Timer';
import GameOver from './GameOver';
import Loader from './Loader';
import ChoiceButtons from './ChoiceButtons';
import FriendsContext from '../context/friendsContext'



const Game = ()=> {
  const friendsContext = useContext(FriendsContext);
  
  
 

useEffect(() => { 
   function Init(){
     friendsContext.getMixedQuotes();
    // await setSolvedAllQuotes(true);
    //eslint-disable-next-line
    console.log('its alive!!!!')
  }
 
}, []);
    
    
  


  
// onClick button 
  // const quoteCounter = e => {


  //   const resetCounter = (e) => {
  //     setCounter(0);
  //     setSolvedAllQuotes(true)
  //   }

  //   const nextQuote = (e) => {
  //     setCounter(prevState => {
  //         return {counter: prevState.counter + 1}
  //   });


  //   counter === 18 ? resetCounter() : nextQuote();
  // }};

  



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
        {friendsContext.characterMatch === true ? (
          <Quote />
        ) : (
          <GameOver />
        )}
        <Timer />

        {friendsContext.counter === 18 ? (
          <Restart />
        ) : (
          <ChoiceButtons />
        )}
      </div>
    );
  
}

export default Game;