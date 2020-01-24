import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
      <ul className='nav-bar mx-auto'>
        <li className='nav-btn'>
          <Link to='/about'>About</Link>
        </li>
        <li className='nav-btn'>
          <Link to='/quiz'>Start</Link>
        </li>
        <li className='nav-btn'>
          <Link to='/credit'>Credits</Link>
        </li>
      </ul>
    ); 
}


export default Navbar