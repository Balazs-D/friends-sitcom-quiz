import React, { Component } from 'react';
import '../assets/scss/style.scss';
import Quote from './Quote';
import Restart from './Restart';
import Timer from './Timer';
import GameOver from './GameOver';
import Loader from './Loader';
import ChoiceButtons from './ChoiceButtons';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      // counter: 0,
      // solvedAllQuotes: false,
      // characterMatch: true
    };
  }

  async componentDidMount(){
    await this.props.getMixedQuotes()
    await this.setState(solvedAllQuotes => ({
      solvedAllQuotes: true
    }));
  }

  // const randomizer = Math.floor(Math.random() * Object.keys(this.state.friendsArray).length)

  printTest = e => {
    // const mappedQuotes = this.props.mixedQuotes.map((item, index) => (
    //           <p key={index}>{item}</p>
    //         ))

    //         console.group(mappedQuotes);

    console.log(this.props.mixedQuotes[this.counter]);
    console.log(e.target.id);
  };

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
   
    
  };

  checkAndDo = async e => {
    this.props.mixedQuotes.character === e.target.value
      ? this.nextQuote()
      : this.setState(characterMatch => ({ characterMatch: false }));

    console.log(e.target.value);
  };



  render() {
    const { quotes, mixedQuotes } = this.props;
    const {
      counter,
      solvedAllQuotes,
      printTest
    } = this.state;

    return (
      <div
        className='game-view mx-auto'
        // style={{ backgroundImage: this.state.backgroundImage }}
      >
        {this.state.characterMatch === true ? (
          <Quote
            quotes={quotes}
            counter={counter}
            mixedQuotes={mixedQuotes[counter]}
            quoteCounter={this.quoteCounter}
            solvedAllQuotes={solvedAllQuotes}
          />
        ) : (
          <GameOver />
        )}
        <Timer />

        {this.state.counter === 18 ? (
          <Restart
            getMixedQuotes={this.props.getMixedQuotes}
            quoteCounter={this.quoteCounter}
            counter={counter}
            solvedAllQuotes={solvedAllQuotes}
            restartGame={this.restartGame}
          />
        ) : (
          <ChoiceButtons
            printTest={printTest}
            quoteCounter={this.quoteCounter}
            mixedQuotes={this.props.mixedQuotes[counter]}
            getMixedQuotes={this.props.getMixedQuotes}
          />
        )}
      </div>
    );
  }
}
