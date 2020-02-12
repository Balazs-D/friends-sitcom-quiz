import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Title from './Title';
import About from './About';
import Game from './Game';
import Credits from './Credits';
import Quote from './Quote';
import axios from 'axios';
import PropTypes from 'prop-types';
import FriendsState from '../context/FriendsState';

import '../assets/scss/style.scss';

import friends1 from '../assets/photos/friends1';
import FriendsContext from '../context/friendsContext';

const App = () => {
  const friendsContext = useContext(FriendsContext);

  

  return (
    <FriendsState>
      <div
        className='fullscreen bg'
        
       
      >
        <div className='con'>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/'></Route>
              <Route exact path='/about'>
                <About />
              </Route>
              <Route exact path='/game'>
                <Game />
              </Route>
              <Route exact path='/credits'>
                <Credits />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </FriendsState>
  );
};

export default App;
