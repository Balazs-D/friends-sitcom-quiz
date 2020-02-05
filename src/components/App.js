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


class App extends Component {
  constructor() {
    super();
    this.state = {
      // quotes: '',
      // mixedQuotes: [],
      // backgroundImage: `url(${friends1})`,
      // quote: '',
      // character: '',
      // loading: false
    };

  }

  async componentDidMount() {
    this.getMixedQuotes();
  }

  // Random quote

  getMixedQuotes = async () => {
    await this.setState( loading => ({loading: true}))
    const res = await axios.get(
      'https://friends-quotes-api.herokuapp.com/quotes'
    );
    // console.log(res.data);


    this.setState(quotes => ({ quotes: res.data }));

     let randomQuotes = await res.data
       .map(a => ({ sort: Math.random(), value: a }))
       .sort((a, b) => a.sort - b.sort)
       .map(a => a.value);

     this.setState(mixedQuotes => ({
       mixedQuotes: randomQuotes
     }));
     this.setState(loader => ({loader: false}))
     console.log(randomQuotes);
     console.log(this.state.mixedQuotes);
     this.setState( loading => ({ loading: false }));

  };




  render() {

    const {backgroundImage, quotes , mixedQuotes, loader} = this.state;

    return (
      <div
        className='fullscreen bg'
        style={{ backgroundImage: backgroundImage }}
      >
        <div className='con'>
          <Router>
            <Navbar getMixedQuotes={this.getMixedQuotes} />
            <Switch>
              <Route exact path='/'></Route>
              <Route exact path='/about'>
                <Home />
              </Route>
              <Route exact path='/game'>
                <Game
                  quotes={quotes}
                  mixedQuotes={mixedQuotes}
                  getMixedQuotes={this.getMixedQuotes}
                  loader={loader}
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
