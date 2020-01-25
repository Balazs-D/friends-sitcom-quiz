import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
      <ul className='nav_bar mx-auto'>
        <li className='navbtn'>
          <Link className='a-link' to='/about'>
            About
          </Link>
        </li>
        <li className='navbtn'>
          <Link className='a-link' to='/quiz'>
            Start
          </Link>
        </li>
        <li className='navbtn'>
          <Link className='a-link' to='/credit'>
            Credits
          </Link>
        </li>
      </ul>
    ); 
}


export default Navbar