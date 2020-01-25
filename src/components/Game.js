import React, { Component } from 'react';
import '../assets/scss/style.scss';
import friends5 from '../assets/photos/friends5.jpg';

export default class Game extends Component {
  state = {
    backgroundImage: `url(${friends5})`,
    backgroundSize: 'cover',

  };

  render() {
    return (
      <div
        className='game-view mx-auto'
        // style={{ backgroundImage: this.state.backgroundImage }}
      >
        <div className='quote-win '></div>
        <div className='choice-gr'>
          <button className='choice-btn'>Joey</button>
          <button className='choice-btn'>Fibi</button>
          <button className='choice-btn'>Chandler</button>
        </div>
      </div>
    );
  }
}
