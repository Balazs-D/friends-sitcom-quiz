import React, { useContext, Fragment } from 'react';
import FriendsContext from '../context/friendsContext';
import friends2 from '../assets/photos/friends2';

const About = () => {
  const friendsContext = useContext(FriendsContext);

  return (
    <div
      className='popup-win mx-auto'
      style={{
        padding: '0',
        marginTop: '2vw', 
        backgroundColor: 'transparent',
        border: '0px solid transparent',
        width: '80vw',
        height: '80vh'
      }}
    >
      {friendsContext.infoArray.map((info, index) => (
        <div className='card-con'>
          {/* <div className='card-imgage'>
            <img
              // src={info.picture}
              alt=''
              // style={{ width: '20vw', height: '10vh' }}
            ></img>
          </div> */}

          <div className='card-layout'>
            <span className='card-span'>{info.popupName}</span>
            <h1 className='card-title'>{info.title}</h1>
            <p>{info.description}</p>
            <p className='card-action'>{info.action}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
