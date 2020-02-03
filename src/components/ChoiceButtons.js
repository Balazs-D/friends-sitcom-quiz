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
      characterMatch: true,
      buttonValue: ''
    };
  }

  componentDidMount() {
    this.nextQuote();
  }



  soloSelection = () => {
    const soloSel = Math.floor(Math.random() * this.state.friendsArray.length);
    return soloSel;
  };

  mixSelection = async (e) => {
    let searchingOne = await this.soloSelection();
    let searchingTwo = await this.soloSelection();

    let btThree = this.props.mixedQuotes.character;
    let btOne = this.state.friendsArray[searchingOne];
    let btTwo = this.state.friendsArray[searchingTwo];

    do {
      let searchingOne = await this.soloSelection();
      let searchingTwo = await this.soloSelection();
      btOne = this.state.friendsArray[searchingOne];
      btTwo = this.state.friendsArray[searchingTwo];
    } while (btTwo === btThree || btTwo === btOne || btOne === btThree);

    await this.setState({
      buttonOne: btOne,
      buttonTwo: btTwo,
      buttonThree: btThree
    });

    console.log(btOne, btTwo, btThree, searchingOne, searchingTwo);
  };

  nextQuote = async e => {
        await this.mixSelection();

    await this.props.quoteCounter();
   
    
  };

  checkAndDo = async e => {
    this.props.mixedQuotes.character === e.target.value
      ? this.nextQuote()
      : this.setState(characterMatch => ({ characterMatch: false }));

    console.log(e.target.value);
  };

  render() {
    const { buttonOne, buttonTwo, buttonThree, value } = this.state;
    return (
      <div className='choice-gr'>
        <button
          className='choice-btn'
          onClick={this.checkAndDo}
          value={buttonOne}
        >
          <p>{buttonOne}</p>
        </button>

        <button
          className='choice-btn'
          onClick={this.checkAndDo}
          value={buttonTwo}
        >
          <p>{buttonTwo}</p>
        </button>

        <button
          className='choice-btn'
          value={buttonThree}
          onClick={this.checkAndDo}
        >
          <p>{buttonThree}</p>
        </button>
      </div>
    );
  }
}
