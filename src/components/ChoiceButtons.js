import React, { Component } from 'react'

export default class ChoiceButtons extends Component {

    constructor(props){
        super(props);

        this.state= {}

    }

  render(){ return (
      <div className='choice-gr'>
        <button className='choice-btn' onClick={this.props.printTest}>
          <p>{this.props.buttonOne}</p>
        </button>

        <button className='choice-btn' onClick={this.props.quoteCounter}>
          <p>{this.props.buttonTwo}</p>
        </button>

        <button className='choice-btn'>
          <p>{this.props.buttonThree}</p>
        </button>
      </div>
    )};
}
