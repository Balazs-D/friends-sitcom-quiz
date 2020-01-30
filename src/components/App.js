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
  
  constructor(){
    super();
    this.state = {
    quotes: [],
    backgroundImage: `url(${friends1})`,
    quote: '',
    character: '',

  };

  (this.getRandomQuote = this.getRandomQuote.bind(this));
  (this.getRandomObject = this.getRandomObject.bind(this));

  }



  async componentDidMount() {
    const res = await axios.get(
      'https://friends-quotes-api.herokuapp.com/quotes'
    );
    console.log(res.data);

    const random = Math.floor(Math.random() * Object.keys(res.data).length);

    // this.setState({ quotes: res.data[random] });
  }

  // Random quote
  async getRandomQuote(e) {


    const res = await axios.get(
      'https://friends-quotes-api.herokuapp.com/quotes'
    );
      const random = Math.floor(Math.random() * Object.keys(res.data).length);

      this.setState(quote => ({ quotes: res.data[random] }
      ))
      }

// Random 
getRandomObject = () => {
  Math.floor(Math.random() * Object.keys().length);
}

  render() {
    return (
      <div
        className='fullscreen bg'
        style={{ backgroundImage: this.state.backgroundImage }}
      >
        <div className='con'>
          <Router>
            <Navbar getRandomQuote={this.getRandomQuote} />
            <Switch>
              <Route exact path='/'></Route>
              <Route exact path='/about'>
                <Home />
              </Route>
              <Route exact path='/game'>
                <Game
                  quotes={this.state.quotes}
                  getRandomQuote={this.getRandomQuote}
                  getRandomObject={this.getRandomObject}
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
