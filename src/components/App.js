import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartButton from './StartButton';
import Navbar from './Navbar'
import '../assets/scss/style.scss';
import friends2 from '../photos/friends2';
import friends1 from '../photos/friends1';

class App extends Component {
  render() {
    return (

      <Router>
       <Navbar />
<div className='con'></div>
      
        
      </Router>
    );
  }
}

export default App;
