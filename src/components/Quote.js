import React, { Component } from 'react';
import { isTemplateElement } from '@babel/types';



export default class Quote extends Component {
 constructor(props){
   super(props);
   this.state = {
     
   }
 }


  render() {

    // let mappedQuotes = this.props.mixedQuotes.map((item, index) => (
    //   <p key={index}>{item.charcter}</p>
    // ));

    
    return (
      <div className='popup-win '>

{this.props.mixedQuotes && <p>{this.props.mixedQuotes.quote}</p>}

              </div>
    );


 
}};



// {
//   this.props.mixedQuotes.map((item, index) => (
//     <p key={index}>{item.character}</p>
//   ));
// }