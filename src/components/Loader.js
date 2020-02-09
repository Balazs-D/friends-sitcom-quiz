import React from 'react'
import Spin from '/home/dci/DCI/lord-of-the-script/react/friend-sitcom-quiz/src/spin.gif';

export default function Loader() {
    return (
      <div>
        <img
          className='white-spinner'
          src={Spin}
          alt=''
          style={{ width: '30%', margin: 'auto', display: 'block' }}
        ></img>
      </div>
    );
}
