import React from 'react'

export default function Newquote(props) {

    
    const {
        quote,
        character
    } = props.src


    return (
      <div>
        
        <p>{quote}{character}</p>
      </div>
    );
}
