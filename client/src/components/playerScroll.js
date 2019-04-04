import React, { Component } from 'react';
import Playercard from './playercard';

export class playerScroll extends Component {
  render() {
    return (
    <div className = "playerScroll">
        <Playercard/>
        <Playercard/>
        <Playercard/>
        <Playercard/>
    </div>
    )
  }
}

export default playerScroll
