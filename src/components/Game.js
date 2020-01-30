import React, { Component } from 'react';
import '../assets/scss/style.scss';
import Quote from './Quote';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendsArray: ['Chandler', 'Rachel', 'Phoebe', 'Monica', 'Ross', 'Joey'],
      buttonTwo: 'Monica!',
      buttonThree: 'Chandler!',
      character: '',
      characterMatch: false,
    };
  }

  // const randomizer = Math.floor(Math.random() * Object.keys(this.state.friendsArray).length)

  

  // 1. Click on button if: character != then restart + button style red / else: next quote + button style green

  



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
        <Quote quotes={this.props.quotes} mixedQuotes={this.props.mixedQuotes}/>

        <div className='choice-gr'>

          <button className='choice-btn'>
            <p>{this.state.buttonOne}</p>
          </button>

          <button className='choice-btn'>
            <p>{this.state.buttonTwo}</p>
          </button>

          <button className='choice-btn'>
            <p>{this.state.buttonThree}</p>
          </button>
        </div>
      </div>
    );
  }
}
