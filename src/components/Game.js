import React, { Component } from 'react';
import '../assets/scss/style.scss';
import friends5 from '../assets/photos/friends5.jpg';
import Quote from './Quote'

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
        <Quote quotes={this.props.quotes} />

        <div className='choice-gr'>
          <button className='choice-btn'>Joey</button>
          <button className='choice-btn'>Fibi</button>
          <button className='choice-btn'>Chandler</button>
        </div>
      </div>
    );
  }
}
