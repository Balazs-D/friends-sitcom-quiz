import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Title from './Title';
import Home from './Home';
import Game from './Game';
import Credits from './Credits';
import Quote from './Quote';
import axios from 'axios';
import PropTypes from 'prop-types'
import FriendsState from '../context/FriendsState'

import '../assets/scss/style.scss';


const App = () => {
   const friendsContext = useContext(FriendsContext);

  const [ quotes, setQuotes ] = useState('');
  const [ mixedQuotes, setMixedQuotes ] = useState([]);
  const [ backgroundImage, setBackgroundImage] = useState(`url(${friends1})`);
  const [ quote, setQuote ] = useState('');
  const [ character, setCharacter ] = useState('');
  const [ loading, setLoading ] = useState(false); 
    //   quotes: '',
    //   mixedQuotes: [],
    //   backgroundImage: `url(${friends1})`,
    //   quote: '',
    //   character: '',
    //   loading: false
    // ;

  

  // useEffect(() =>  {
  //   friendsContext.getMixedQuotes();
  // }, []);

  // Random quote

  // const getMixedQuotes = async () => {
  //   await setLoading( true )
  //   const res = await axios.get(
  //     'https://friends-quotes-api.herokuapp.com/quotes'
  //   );
  //   // console.log(res.data);


  //   setQuotes( res.data );

  //    let randomQuotes = await res.data
  //      .map(a => ({ sort: Math.random(), value: a }))
  //      .sort((a, b) => a.sort - b.sort)
  //      .map(a => a.value);

  //    setMixedQuotes(randomQuotes);
  //    console.log(randomQuotes);
  //    console.log(mixedQuotes);
  //    setLoading(false);

  // };






    return (
      <FriendsState>
        <div
          className='fullscreen bg'
          style={{ backgroundImage: backgroundImage }}
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
  
}

export default App;

