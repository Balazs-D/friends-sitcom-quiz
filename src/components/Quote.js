import React, { Component } from 'react';



export default class Quote extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }


  render() {

    
    return <div className='popup-win '>
    {this.props.quotes && <p>{this.props.mixedQuotes}</p>}
      {/* {this.props.quotes && <p>{this.props.quotes.quote}</p>} */}
    </div>
  }

 
}


  
    // {this.props.quote.map(quote => <p> quote={quote}></p>)}
  