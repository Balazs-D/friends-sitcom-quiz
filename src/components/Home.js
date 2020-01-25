import React, { Component } from 'react'
import '../assets/scss/style.scss';
import friends1 from '../assets/photos/friends1';
import friends2 from '../assets/photos/friends2';
import friends3 from '../assets/photos/friends3';
import friends4 from '../assets/photos/friends4.jpg';

export default class Home extends Component {
                 state = {
                   backgroundImage: `url(${friends4})`
                 };

                 render() {
                   return (
                     <div className='con'>
                       <div
                         className='bg-intro'
                         style={{ backgroundImage: this.state.backgroundImage }}
                       ></div>
                     </div>
                   );
                 }
               }
