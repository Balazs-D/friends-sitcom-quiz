import React, { useEffect, useContext } from 'react';
import '../assets/scss/style.scss';
import Quote from './Quote';
import Restart from './Restart';
import Timer from './Timer';
import GameOver from './GameOver';
import Loader from './Loader';
import ChoiceButtons from './ChoiceButtons';
import FriendsContext from '../context/friendsContext';
import Counter from './Counter';
import fr1 from '../assets/photos/fr001.jpg';


const Game = () => {
  const friendsContext = useContext(FriendsContext);

  useEffect(() => {
    function Init() {
      friendsContext.getMixedQuotes();
      // await setSolvedAllQuotes(true);
      //eslint-disable-next-line
      console.log('its alive!!!!');
    }
  }, []);

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
      style={{ backgroundImage: {fr1} }}
    >
     <Counter />
      <p>current.char: {friendsContext.currentCharacter}</p>
      
      <p></p>
      {friendsContext.characterMatch === true ? <Quote /> : <GameOver />}

      {friendsContext.counter === 18 ? <Restart /> : <ChoiceButtons />}
    </div>
  );
};

export default Game;
