import React, { Component } from 'react';
import '../assets/scss/style.scss';
import friends5 from '../assets/photos/friends5.jpg';
import Quote from './Quote';

const friendsArray = [
  { name: 'Chandler' },
  { name: 'Rachael' },
  { name: 'Fibi' },
  { name: 'Monica' },
  { name: 'Ross' },
  { name: 'Joey' }
];

const randomizer = Math.floor(Math.random() * Object.keys(friendsArray).length);

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonOne: '',
      buttonTwo: '',
      buttonThree: '',
      selectionArray: [{ val: 'randomizer' }, { val: 'this.props.quotes.character'}]
    };

    this.recalculateButtons = this.recalculateButtons.bind(this);
  }

  recalculateButtons() {}

  // 1. Click on button if: character != then restart + button style red / else: next quote + button style green

  checkAnswer() {
    if (this.state.buttonThree === this.props.quotes.character) {
      this.props.getRandomQuote()
    } else {
      
    }
  }
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
        <Quote quotes={this.props.quotes} />

        <div className='choice-gr'>
          <button
            className='choice-btn'
            onClick={this.props.getRandomQuote.bind(this)}
          >
            Joey
          </button>
          <button className='choice-btn'>
            {friendsArray[randomizer].name}
          </button>
          <button 
          className='choice-btn'
          onClick={this.state.checkAnswer}>{this.props.quotes && <p>{this.props.quotes.character}</p>}</button>
        </div>
      </div>
    );
  }
}
