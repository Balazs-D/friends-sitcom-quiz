import React, { useState, useEffect } from 'react';

const friendsArray = ['Chandler', 'Rachel', 'Phoebe', 'Monica', 'Ross', 'Joey'];


const ChoiceButtons = ({ quoteCounter, mixedQuotes, getMixedQuotes }) => {
  const [ selectionArray, setSelectionArray] = useState([]);
  const [ buttonOne, setButtonOne ] = useState('');
  const [ buttonTwo, setButtonTwo ] = useState('');
  const [ buttonThree, setButtonThree ] = useState('');
  const [ character, setCharacter ] = useState('');
  const [ characterMatch, setCharacterMatch ] = useState(true);
  const [ buttonValue, setButtonValue ] = useState('');


   

  useEffect(()=> {
        nextQuote();

  }, []); 
  



  const soloSelection = () => {
    const soloSel = Math.floor(Math.random() * friendsArray.length);
    return soloSel;
  };

  const mixSelection = async (e) => {
    let searchingOne = await soloSelection();
    let searchingTwo = await soloSelection();

    let btThree = mixedQuotes.character;
    let btOne = friendsArray[searchingOne];
    let btTwo = friendsArray[searchingTwo];

    do {
      let searchingOne = await soloSelection();
      let searchingTwo = await soloSelection();
      btOne = friendsArray[searchingOne];
      btTwo = friendsArray[searchingTwo];
    } while (btTwo === btThree || btTwo === btOne || btOne === btThree);

    await setButtonOne(btOne);
    await setButtonTwo(btTwo);
    await setButtonThree(btThree);
      
    console.log(btOne, btTwo, btThree, searchingOne, searchingTwo);
  };

  const nextQuote = async e => {
        await mixSelection();
        await quoteCounter();
 };

  const checkAndDo = async e => {
    mixedQuotes.character === e.target.value
      ? nextQuote()
      : setCharacterMatch(false);

    console.log(e.target.value);
  };

  
    return (
      <div className='choice-gr'>
        <button
          className='choice-btn'
          onClick={checkAndDo}
          value={buttonOne}
        >
          <p>{buttonOne}</p>
        </button>

        <button
          className='choice-btn'
          onClick={checkAndDo}
          value={buttonTwo}
        >
          <p>{buttonTwo}</p>
        </button>

        <button
          className='choice-btn'
          value={buttonThree}
          onClick={checkAndDo}
        >
          <p>{buttonThree}</p>
        </button>
      </div>
    );
  
}

export default ChoiceButtons