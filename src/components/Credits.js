import React, { useContext } from 'react';
import '../assets/scss/style.scss';
import Loader from './Loader';
import Frame from '/home/dci/DCI/lord-of-the-script/react/friend-sitcom-quiz/src/assets/photos/frame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import fr1 from '../assets/photos/fr001.jpg';

const Credits = () => {

 

  
    return (
      <div
        className=' mx-auto'
        style={{
          // backgroundColor: '#645488',
          width: '100vw',
          height: 'calc(100% - 12vh)',
          overflow: 'hidden'
        }}
      >
        <img
          src={fr1}
          alt=''
          style={{ width: '100vw', marginLeft: '-0vw' }}
        ></img>

        <div className='credit-con'>
          <span> Programmed & Coded by:</span>
          <h2 style={{ fontSize: '1.3vw', color: 'black' }}>BALAZS DANYADI</h2>
          <br />
          <span>Contact:</span>

          <a
            className='a link'
            href={'https://github.com/Balazs-D'}
            target='_blank'
            rel='noopener noreferrer'
            style={{ fontSize: '1vw' }}
          >
            Github
          </a>

          <a
            className='a link'
            href={'https://www.linkedin.com/in/balazs-danyadi/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>

          <br />
          <span>Content:</span>
          {/* <div
            style={{
              fontSize: '1vw',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end'
            }}
          > */}
          <a
            className='a link'
            href='https://friends-quotes-api.herokuapp.com/'
          >
            Quotes API
          </a>
          <a className='a link' href='http://www.onlinewebfonts.com'>
            Font Family
          </a>
          <a className='a link' href='https://www.clipart.email/'>
            Clipart
          </a>
          <a
            className='a link'
            href='https://www.warnerbros.com/tv/friends/#about'
          >
            Friends Offical
          </a>

          {/* </div> */}
        </div>
      </div>
    );
  }

  export default Credits
