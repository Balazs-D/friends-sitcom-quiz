import React, { useContext } from 'react';
import friendsContext from '../context/friendsContext';
import FriendsContext from '../context/friendsContext'

function Counter() {

    const friendsContext = useContext(FriendsContext)
    return (
      <div>
        <p>`17 / {friendsContext.counter}`</p>
      </div>
    );
}
export default  Counter