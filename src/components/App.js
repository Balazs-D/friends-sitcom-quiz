import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartButton from './StartButton';
import Navbar from './Navbar'
import Title from './Title'
import '../assets/scss/style.scss';
import friends2 from '../assets/photos/friends2';
import friends1 from '../assets/photos/friends1';
import Layout from './Layout';

class App extends Component {
 

 

  render() {
    return (
      <Router>
        <Navbar />
        <Layout />

        <Title />

        <Switch>
          <Route exact path='/about'>
            <Layout />
          </Route>

          <Route
            exact
            path='/game'
            
          >
            <Layout />
          </Route>

          <Route exact path='/credits'></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
