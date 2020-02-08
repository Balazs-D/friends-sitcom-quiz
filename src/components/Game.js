<<<<<<< HEAD
import React, { useContext } from 'react';
=======
import React, { useEffect, useContext } from 'react';
>>>>>>> refactoring
import '../assets/scss/style.scss';
import Quote from './Quote';
import Restart from './Restart';
import Timer from './Timer';
import GameOver from './GameOver';
import Loader from './Loader';
import ChoiceButtons from './ChoiceButtons';
import FriendsContext from '../context/friendsContext'

<<<<<<< HEAD
const Game = () => {

  const quoteContext = useContext(quoteContext);
  const {counter, solvedAllQuotes, characterMatch} = quoteContext
 
=======

>>>>>>> refactoring

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

  



<<<<<<< HEAD
  quoteCounter = e => {
    // console.log(this.state.counter);
    // console.log(this.props.mixedQuotes[this.counter]);
    this.state.counter === 19
      ? this.setState({ counter: 0, solvedAllQuotes: true })
      : this.setState({
          counter: this.state.counter + 1,
          solvedAllQuotes: true,
          characterMatch: true
        });
  };

  restartGame = () => {
    this.setState(counter => ({ counter: 0 }));
  };

  // 1. Click on button if character != then restart + button style red / else: next quote + button style green

  // 1. Click on START again wil restart the game. After click alert comes up and asking if you really want to restart?
  // 1. Bring Fetch here
  // Point counter -> each match 100$ -> general count, top 5 will be saved with 3 letter as name
  // 17/x counter?
  // button component separate

  soloSelection = () => {
    const soloSel = Math.floor(Math.random() * this.state.friendsArray.length);
    return soloSel;
  };

  mixSelection = async (e) => {
    const searchingOne = await this.soloSelection();
    const searchingTwo = await this.soloSelection();

    let btThree = this.props.mixedQuotes.character;
    let btOne = this.state.friendsArray[searchingOne];
    let btTwo = this.state.friendsArray[searchingTwo];

    do {
      const searchingOne = await this.soloSelection();
      const searchingTwo = await this.soloSelection();
      btOne = this.state.friendsArray[searchingOne];
      btTwo = this.state.friendsArray[searchingTwo];
    } while (btTwo === btThree || btTwo === btOne || btOne === btThree);

    await this.setState({
      buttonOne: btOne,
      buttonTwo: btTwo,
      buttonThree: btThree
    });

    console.log(btOne, btTwo, btThree, searchingOne, searchingTwo);
  };

  nextQuote = async e => {
        await this.mixSelection();

    await this.props.quoteCounter();
=======
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
>>>>>>> refactoring
   
    
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

        {friendsContext.counter === 17 ? (
          <Restart />
        ) : (
          <ChoiceButtons />
        )}
      </div>
    );
  
}

export default Game;