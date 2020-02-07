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

  return (
    <div className='choice-gr'>
      <button className='choice-btn'  value='buttonOne'>
        <p>Karol</p>
      </button>

      <button className='choice-btn'  value='buttonTwo' onClick={friendsContext.nextQuote}>
        <p>{friendsContext.buttonTwo}</p>
      </button>

      <button className='choice-btn' value='buttonThree' onClick={friendsContext.mixSelection}>
        <p>{friendsContext.buttonThree}</p>
      </button>
    </div>
  );
};

export default ChoiceButtons;
