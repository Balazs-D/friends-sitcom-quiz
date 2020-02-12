import React, { useContext } from 'react';
import FriendsContext from '../context/friendsContext'
import Loader from './Loader'



const Quote= () => {
   const friendsContext = useContext(FriendsContext);
  
    return (
      <div className='popup-win '>
      
      {friendsContext.loading ? <Loader /> : <p>{friendsContext.currentQuote}</p>}
      
      </div>
    );
};


export default Quote