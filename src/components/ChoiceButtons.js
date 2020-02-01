import React, { Component } from 'react';

export default class ChoiceButtons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendsArray: ['Chandler', 'Rachel', 'Phoebe', 'Monica', 'Ross', 'Joey'],
      selectionArray: [],
      buttonOne: '',
      buttonTwo: '',
      buttonThree: '',
      character: '',
      characterMatch: false
    };
  }

  componentDidMount(){
    this.nextQuote();
  }

  soloSelection=()=>{
    const soloSel = Math.floor(Math.random() * this.state.friendsArray.length);
    return soloSel
  }

  mixSelection = async () => {
    const searchingOne = await this.soloSelection();
    const searchingTwo = await this.soloSelection();
    
    let btThree = this.props.mixedQuotes.character;
    let btOne = this.state.friendsArray[searchingOne];
    let btTwo = this.state.friendsArray[searchingTwo];

    do{
      const searchingOne = await this.soloSelection();
      const searchingTwo = await this.soloSelection();
      btOne = this.state.friendsArray[searchingOne];
      btTwo = this.state.friendsArray[searchingTwo]
    }
    while(btTwo === btThree || btTwo === btOne || btOne === btThree )
    
    await this.setState({
      buttonOne: btOne,
      buttonTwo: btTwo,
      buttonThree: btThree
    });
    
    console.log(btOne, btTwo, btThree, searchingOne, searchingTwo)
  };

  nextQuote=async()=>{

await this.props.quoteCounter();
await this.mixSelection();
  }

  render() {
    return (
      <div className='choice-gr'>
        <button className='choice-btn' onClick={this.props.printTest}>
          <p>{this.state.buttonOne}</p>
        </button>

        <button className='choice-btn' onClick={this.nextQuote}>
          <p>{this.state.buttonTwo}</p>
        </button>

        <button className='choice-btn'>
          <p>{this.state.buttonThree}</p>
        </button>
      </div>
    );
  }
}
