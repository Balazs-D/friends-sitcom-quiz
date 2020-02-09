import React, { Component } from 'react';
import '../assets/scss/style.scss';
import Loader from './Loader';
import Frame from '/home/dci/DCI/lord-of-the-script/react/friend-sitcom-quiz/src/assets/photos/frame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom'

const Credits = () => {

 

  
    return (
      <div
        className='popup-win mx-auto'
        style={{
          padding: '0',
          backgroundColor: '#645488',
          width: '100vw',
          height: '100vh'
        }}
      >
        <div
          className='mx-auto'
          
        >
          <img src={Frame} alt=''></img>
        </div>

        <div className='credit-con'>
          <div><h2 style={{ fontSize: '1.3vw', color: 'black' }}>
          Programmed & Coded by BALAZS DANYADI
          </h2>
          <a
          className='a link'
          href={'https://github.com/Balazs-D'}
          target='_blank'
          rel='noopener noreferrer'
          style={{fontSize: '1vw'}}
          >See on Github
          <FontAwesomeIcon className='icon' icon={faGithub} size='1x' />
          </a></div>

          <div style={{
            fontSize: '1vw', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'
          }}><a className='aa' href='http://www.onlinewebfonts.com'>Font Family</a>
          <a className='aa' href='https://www.clipart.email/'>Clipart</a></div>
        </div>
      </div>
    );
  }

  export default Credits
