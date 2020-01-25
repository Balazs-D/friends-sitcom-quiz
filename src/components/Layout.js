import React, { Component } from 'react'
import friends1 from '../assets/photos/friends1';
import '../assets/scss/style.scss';

export default class Layout extends Component {

    state = {
        background: '',
    }
    render() {
        return (
            <div className='con'>
              <div
                className='bg-intro'
                style={{ backgroundImage: `url(${friends1})` }}
              ></div>
            </div>
        );
    }
}
