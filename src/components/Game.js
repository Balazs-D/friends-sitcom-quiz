import React, { Component } from 'react';
import '../assets/scss/style.scss';
import Quote from './Quote';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendsArray: ['Chandler', 'Rachel', 'Phoebe', 'Monica', 'Ross', 'Joey'],
      buttonOne: '',
      buttonTwo: '',
      buttonThree: '',
      character: ''
    };
  }

  // const randomizer = Math.floor(Math.random() * Object.keys(this.state.friendsArray).length)

  componentDidMount() {
    this.refreshButtonFill();
  }

  // 1. Click on button if: character != then restart + button style red / else: next quote + button style green

  handleButtonClick = (e) => {
    e.preventDefault();
  

    console.log(this.state);
    if (this.state.buttonThree === this.props.quotes.character) {
      this.props.getRandomQuote();
      this.refreshButtonFill();
      console.log('jaaaaaaaaaaaaaaaaaaaa');
    } else {
      return <p>WRONGGGGG</p>
    }
  };

  refreshButtonFill = (e) => {
    // e.preventDefault();


    // Creating random function - 2 different one
    const randomizer = Math.floor(
      Math.random() * Object.keys(this.state.friendsArray).length
    );
    const randomizerAgain = Math.floor(
      Math.random() * Object.keys(this.state.friendsArray).length
    );

// Assigning random items 
    let bOne = this.state.friendsArray[randomizer];
    let bTwo = this.state.friendsArray[randomizerAgain];
    let bThree = this.props.quotes.character;

    console.log(this.props.quotes)

// Checking if all are different
    if (bOne === bTwo ||
        bOne === bThree ||
        bTwo === bThree) {
    bTwo = this.state.friendsArray[randomizerAgain];
    bOne = this.state.friendsArray[randomizer];
bThree = this.state.props.quotes.character;

// If all different then fills into state
    }else{
    this.setState({ buttonOne: bOne, buttonTwo: bTwo, buttonThree: bThree });

    }

  };

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

          <button className='choice-btn' onClick={this.handleButtonClick}>
            <p>{this.state.buttonOne}</p>
          </button>

          <button className='choice-btn' onClick={this.handleButtonClick}>
            <p>{this.state.buttonTwo}</p>
          </button>

          <button className='choice-btn' onClick={this.handleButtonClick}>
            <p>{this.state.buttonThree}</p>
          </button>
        </div>
      </div>
    );
  }
}
