import React, { useState, useContext } from 'react';
import FriendsContext from '../context/friendsContext'



const Quote= ({ mixedQuotes, solvedAllQuotes }) => {
   const friendsContext = useContext(FriendsContext);

    return (
      <div className='popup-win '>
      
      {mixedQuotes && solvedAllQuotes ? <p>{mixedQuotes.quote}</p> : <p>You Won!!!</p>}
      </div>
    );
};


export default Quote