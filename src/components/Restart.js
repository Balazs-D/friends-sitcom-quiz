import React, { Component } from 'react'

export default class Restart extends Component {

    constructor(props){
        super(props);
        this.state={
          restarted: false,
        };

    }

  remixRestart= async ()=>{
    await this.props.getMixedQuotes();

    await this.props.restartGame();
  }



// if restarted: false = show button
// else (restarted= true) ???

    render() {


        return (
          <div>
            <button className='navbtn' onClick={this.remixRestart}>Restart</button>
          </div>
        );
    }
}
