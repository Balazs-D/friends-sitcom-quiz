import React, { useContext, Fragment } from 'react';
import FriendsContext from '../context/friendsContext';
import friends2 from '../assets/photos/friends2';
import fr1 from '../assets/photos/fr006.jpg';


const About = () => {
  const friendsContext = useContext(FriendsContext);

  return (
    <div
      className='con mx-auto'
      style={{
        padding: '0',
        marginTop: '2vw'
      }}
    >
   
      {friendsContext.infoArray.map((info, index) => (
        <div className='card-con'>
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
