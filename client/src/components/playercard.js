import React, { Component } from 'react';
import pic from '../pictures/sam.jpg';

export class playercard extends Component {
  render() {
    return (
      <div>
        <img className = "portrait" src = {pic}/>
        <p className = "playerName">Sam Wezniak</p>
      </div>
    )
  }
}

export default playercard
