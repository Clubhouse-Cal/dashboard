import React, { Component } from 'react';
import Playercard from './playercard';

export class playerScroll extends Component {
  // constructor(props){
  //   super(props)
  // }
  
  render() {
    return this.props.names.map(name=>
    <div>
        <Playercard name={name}/>
    </div>
    );
  }
}

export default playerScroll
