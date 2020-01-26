import React, { Component } from 'react'
import Newquote from './Newquote'
import axios from 'axios';

export default class Quote extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     url: 'https://friends-quotes-api.herokuapp.com/quotes',
                     source: '',
                     fetch: false
                   }};

                   
                 
                //  const{ 
                //        quote,
                //        charakter
                //    } = props

componentDidMount(){
    this.fetchQuotes()
}

                 componentDidUpdate() {
                   axios
                   .get('https://friends-quotes-api.herokuapp.com/quotes')
                   .then(res => console.log(res.data))
                   
                 }
                 

                 fetchQuotes = async () => {
                   try {
                     const req = await fetch(this.state.url);
                     const res = await req.json;

                     const random = Math.floor(
                       Math.random() * Object.keys(res).length
                     );

                     this.setState(prevState => ({
                       fetch: true,
                       src: res[random]
                     }));
                    //  console.log(res[random]);
                   } catch (error) {
                     console.log(error);
                   }
                 };

                 render() {
                 return (
                   <div className='quote-win'>
                     <p>
                       {this.state.fetch && <Newquote src={this.state.source} />}
                     </p>
                   </div>
                 );
                 }
                }
            
