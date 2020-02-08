import React, { useContext } from 'react';
import FriendsContext from '../context/friendsContext'

const Restart = () =>  {

const friendsContext = useContext(FriendsContext);
        return (
          <div>
            <button className='navbtn' onClick={friendsContext.restart}>
              Restart
            </button>
          </div>
        );
    }

export default Restart