import React, { Component } from 'react';
import '../assets/scss/style.scss';
import Quote from './Quote';
import Restart from './Restart' 
import ChoiceButtons from './ChoiceButtons'
import { thisExpression } from '@babel/types';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendsArray: ['Chandler', 'Rachel', 'Phoebe', 'Monica', 'Ross', 'Joey'],
      buttonOne: '',
      buttonTwo: 'Monica!',
      buttonThree: 'Chandler!',
      character: '',
      characterMatch: false,
      mixedQuotes: [],
      counter: 0,
      solvedAllQuotes: false
    };


  }

componentDidMount() {
    this.setState(solvedAllQuotes => ({
      solvedAllQuotes: true
    }));
  }




  // const randomizer = Math.floor(Math.random() * Object.keys(this.state.friendsArray).length)

  printTest = () => {
    // const mappedQuotes = this.props.mixedQuotes.map((item, index) => (
    //           <p key={index}>{item}</p>
    //         ))

    //         console.group(mappedQuotes);

    console.log(this.props.mixedQuotes[this.counter]);
  };

  quoteCounter = e => {
    // console.log(this.state.counter);
    // console.log(this.props.mixedQuotes[this.counter]);
    this.state.counter === 19
      ? this.setState({ counter: 0, solvedAllQuotes: true })
      : this.setState({
          counter: this.state.counter + 1,
          solvedAllQuotes: true
        });
  };

  restartGame = () => {
    this.setState(counter => ({counter: 0}))
  }

  // 1. Click on button if character != then restart + button style red / else: next quote + button style green

  // 1. Click on START again wil restart the game. After click alert comes up and asking if you really want to restart?
  // 1. Bring Fetch here
  // Point counter -> each match 100$ -> general count, top 5 will be saved with 3 letter as name
  // 17/x counter
  // button component separate

  render() {
    return (
      <div
        className='game-view mx-auto'
        // style={{ backgroundImage: this.state.backgroundImage }}
      >
        <Quote
          quotes={this.props.quotes}
          counter={this.state.counter}
          mixedQuotes={this.props.mixedQuotes[this.state.counter]}
          quoteCounter={this.state.quoteCounter}
          solvedAllQuotes={this.state.solvedAllQuotes}
        />

        {this.state.counter === 18 ? (
          <Restart
            getMixedQuotes={this.props.getMixedQuotes}
            quoteCounter={this.quoteCounter}
            counter={this.state.counter}
            solvedAllQuotes={this.state.solvedAllQuotes}
            restartGame={this.restartGame}
          />
        ) : (
          <ChoiceButtons
            printTest={this.state.printTest}
            quoteCounter={this.quoteCounter}
            buttonOne={this.state.buttonOne}
            buttonTwo={this.state.buttonTwo}
            buttonThree={this.state.buttonThree}
            getMixedQuotes={this.getMixedQuotes}
          />
        )}
      </div>
    );
  }
}
