import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import friends2 from '../assets/photos/friends2';
import friends1 from '../assets/photos/friends1';
import Title from './Title';
import FriendsContext from '../context/friendsContext'

const Navbar = () => {

  const friendsContext = useContext(FriendsContext);
  



    return (
      <ul className='nav_bar mx-auto'>
        <li className='navbtn'>
          <NavLink className='a-link' to='/about'>
            About
          </NavLink>
        </li>

        <li className='navbtn'>
          <NavLink className='a-link' to='/game' onClick={friendsContext.getMixedQuotes} >
            Start
          </NavLink>
        </li>

        <li className='navbtn'>
          <NavLink className='a-link' to='/credits'>
            Credits
          </NavLink>
        </li>
      </ul>
    );
  }

export default Navbar