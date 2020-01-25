import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import friends2 from '../assets/photos/friends2';
import friends1 from '../assets/photos/friends1';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: `url(${friends1})`
    };
  }

  changeBg = backgroundImage => {
  this.setState({ backgroundImage });
};

  render() {
    return <ul className='nav_bar mx-auto'>
      <li className='navbtn'>
        <Link className='a-link' to='/about'>
          About
        </Link>
      </li>
      <li className='navbtn'>
        <Link
          className='a-link'
          to='/game'
          onClick={() => this.changeBg(`url(${friends2})`)}
        >
          Start
        </Link>
      </li>
      <li className='navbtn'>
        <Link className='a-link' to='/credits'>
          Credits
        </Link>
      </li>
    </ul>
}
}