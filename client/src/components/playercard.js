import React, { Component } from 'react';
import pic from '../pictures/sam.jpg';

export class playercard extends Component {
  render() {
    //console.log(this.props.name);
    var name = this.props.name;
    //console.log({name}[0]);
        return (
          
          <div className = "playerCard">
            <img className = "portrait" src = {pic}/>
            <p className = "playerName">{name}</p>
          </div>
        );}
    }

export default playercard
