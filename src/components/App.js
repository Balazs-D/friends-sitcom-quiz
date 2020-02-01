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
  constructor() {
    super();
    this.state = {
      quotes: '',
      mixedQuotes: [],
      backgroundImage: `url(${friends1})`,
      quote: '',
      character: ''
    };

    // (this.getQuotes = this.getQuotes.bind(this));
  }

  async componentDidMount() {
    this.getMixedQuotes();
  }

  // Random quote

  getMixedQuotes = async () => {
    const res = await axios.get(
      'https://friends-quotes-api.herokuapp.com/quotes'
    );
    // console.log(res.data);


    this.setState(quotes => ({ quotes: res.data }));

     let randomQuotes = res.data
       .map(a => ({ sort: Math.random(), value: a }))
       .sort((a, b) => a.sort - b.sort)
       .map(a => a.value);

     this.setState(mixedQuotes => ({
       mixedQuotes: randomQuotes
     }));
     console.log(randomQuotes);
     console.log(this.state.mixedQuotes);
  };

  // randomizeArray = () => {
    

  //   let randomQuotes = quotesArray
  //     .map(a => ({ sort: Math.random(), value: a }))
  //     .sort((a, b) => a.sort - b.sort)
  //     .map(a => a.value);

  //   this.setState(mixedQuotes => ({
  //     mixedQuotes: randomQuotes
  //   }));
  //   console.log(randomQuotes);
  //   console.log(this.state.mixedQuotes);
  // };

  // Random
  getRandomObject = a => {
    Math.floor(Math.random() * Object.keys(a).length);
  };

  render() {
    return (
      <div
        className='fullscreen bg'
        style={{ backgroundImage: this.state.backgroundImage }}
      >
        <div className='con'>
          <Router>
            <Navbar getMixedQuotes={this.getMixedQuotes} randomizeArray={this.randomizeArray}/>
            <Switch>
              <Route exact path='/'></Route>
              <Route exact path='/about'>
                <Home />
              </Route>
              <Route exact path='/game'>
                <Game
                  quotes={this.state.quotes}
                  mixedQuotes={this.state.mixedQuotes}
                  getMixedQuotes={this.getMixedQuotes}
                />
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
