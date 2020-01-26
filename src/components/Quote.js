import React, { Component } from 'react';



export default class Quote extends Component {
  


  render() {

    
    return <div className='quote-win'>
      {this.props.quotes.map(quote => <p>{quote.quote}</p>)}
      
    </div>
  }
}


  
    // {this.props.quote.map(quote => <p quote={quote}></p>)}
  