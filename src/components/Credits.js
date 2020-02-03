import React, { Component } from 'react';
import '../assets/scss/style.scss';
import friends3 from '../assets/photos/friends3';
import Loader from './Loader'

export default class Credits extends Component {
  state = {
    backgroundImage: `url(${friends3})`
  };

  render() {
    return (
      <div className='game-view mx-auto'>
        <div className='popup-win'>
          <Loader />
        </div>
      </div>
    );
  }
}
