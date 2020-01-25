import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartButton from './StartButton';
import Navbar from './Navbar'
import '../assets/scss/style.scss';
import friends2 from '../assets/photos/friends2';
import friends1 from '../assets/photos/friends1';

class App extends Component {
  render() {
    return (

      <Router>
       <Navbar />
<div className='con'>
  <div className='bg-intro' style={{backgroundImage:`url(${friends1})`}}></div>
</div>
      
        
      </Router>
    );
  }
}

export default App;
