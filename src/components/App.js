import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Title from './Title';
import Home from './Home';
import Game from './Game';
import Credits from './Credits';
import Quote from './Quote';
import axios from 'axios';

import '../assets/scss/style.scss';
import friends1 from '../assets/photos/friends1';
import friends2 from '../assets/photos/friends2';
import friends3 from '../assets/photos/friends3';

class App extends Component {
  state = {
    quotes: [],
    backgroundImage: `url(${friends1})`
  };

  async componentDidMount() {
    const res = await axios.get(
      'https://friends-quotes-api.herokuapp.com/quotes'
    );
    console.log(res.data);

    const random = Math.floor(Math.random() * Object.keys(res.data).length);

    this.setState({ quotes: res.data[random] });
  }

  render() {
    return (
      <div
        className='fullscreen bg'
        style={{ backgroundImage: this.state.backgroundImage }}
      >
      
        <div className='con'>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path='/'></Route>
              <Route exact path='/about'>
                <Home />
              </Route>
              <Route exact path='/game'>
                <Game quotes={this.state.quotes} />
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
