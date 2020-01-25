import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Title from './Title';
import Home from './Home';
import Game from './Game';
import Credits from './Credits';

import '../assets/scss/style.scss';
import friends1 from '../assets/photos/friends1';
import friends2 from '../assets/photos/friends2';
import friends3 from '../assets/photos/friends3';

class App extends Component {
  // Initial state
  constructor(props) {
    super(props);
    this.state = { 
      backgroundImage: `url(${friends1})`,
      };
         

  }
  changeBg() {
    this.setState({ backgroundImage: `url(${friends2})` }.bind(this));
  }

  render() {
    return (
      <div
        className='fullscreen bg'
        style={{ backgroundImage: this.state.backgroundImage }}
      >
        <div>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/'></Route>
              <Route exact path='/about' onClick={this.changeBg}>
                <Home />
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
    );
  }
}

export default App;
