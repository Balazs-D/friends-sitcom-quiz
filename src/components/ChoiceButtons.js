import React, { useState, useEffect, useContext } from 'react';
import FriendsContext from '../context/friendsContext';

// const friendsArray = ['Chandler', 'Rachel', 'Phoebe', 'Monica', 'Ross', 'Joey'];

const ChoiceButtons = () => {
  const friendsContext = useContext(FriendsContext);

  // useEffect(() => {
  //   nextQuote();
  // }, []);

  // const soloSelection = () => {
  //   const soloSel = Math.floor(Math.random() * friendsArray.length);
  //   return soloSel;
  // };

  // const mixSelection = async (e) => {
  //   let searchingOne = await soloSelection();
  //   let searchingTwo = await soloSelection();

  //   let btThree = friendsContext.mixedQuotes.character;
  //   let btOne = friendsArray[searchingOne];
  //   let btTwo = friendsArray[searchingTwo];

  //   do {
  //     let searchingOne = await soloSelection();
  //     let searchingTwo = await soloSelection();
  //     btOne = friendsArray[searchingOne];
  //     btTwo = friendsArray[searchingTwo];
  //   } while (btTwo === btThree || btTwo === btOne || btOne === btThree);

  //   await setButtonOne(btOne);
  //   await setButtonTwo(btTwo);
  //   await setButtonThree(btThree);

  //   console.log(btOne, btTwo, btThree, searchingOne, searchingTwo);
  // };

  // const nextQuote = async e => {
  //   await friendsContext.mixSelection();
  //   await friendsContext.quoteCounter();
  // };

  // const checkAndDo = async e => {
  //   friendsContext.mixedQuotes.character === e.target.value
  //     ? nextQuote()
  //     : setCharacterMatch(false);

  //   console.log(e.target.value);
  // };

const valOne = friendsContext.currentCharacter;
const valTwo = friendsContext.buttonArray[0];
const valThree = friendsContext.buttonArray[1];

  return (
    <div className='choice-gr'>
      <button className='choice-btn' 
        value={valOne} 
        onClick={friendsContext.checkAndDo}>
        <p>{valOne}</p>
      </button>

      <button
        className='choice-btn'
        value={valTwo}
        onClick={friendsContext.checkAndDo}
      >
        <p>{valTwo}</p>
      </button>

      <button
        className='choice-btn'
        value={valThree}
        onClick={friendsContext.checkAndDo}
      >
        <p>{valThree}</p>
      </button>
    </div>
  );
};

export default ChoiceButtons;
