import React, { useContext } from 'react';
import FriendsContext from '../context/friendsContext'



const Quote= () => {
   const friendsContext = useContext(FriendsContext);

    return (
      <div className='popup-win '>
      
      {/* {friendsContext.mixedQuotes && friendsContext.solvedAllQuotes ?  */}
      <p>{friendsContext.currentQuote}</p>
       {/* : <p>You Won!!!</p>} */}
      </div>
    );
};


export default Quote