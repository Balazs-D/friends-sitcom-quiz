import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';



export default class Quote extends Component {
 constructor(props){
   super(props);
   this.state = {
     
   }
 }




  render() {


   
 
    
    return (
      <div className='popup-win '>
      
      {this.props.mixedQuotes && this.props.solvedAllQuotes ? <p>{this.props.mixedQuotes.quote}</p> : <p>You Won!!!</p>}
      </div>
    );


 
}};


//  {
// {this.props.mixedQuotes && <p>{this.props.mixedQuotes.quote}</p>}
// } 


// {
//   this.props.mixedQuotes.map((item, index) => (
//     <p key={index}>{item.character}</p>
//   ));
// }