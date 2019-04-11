import React, { Component } from 'react';
import pic from '../pictures/sam.jpg';

export class playercard extends Component {
  render() {
    var name = this.props.name;
    console.log(name==null);
    if (name!=null){
      return (
          
        <div className = "playerCard">
          <img className = "portrait" src = {pic}/>
          <p className = "playerName">{name[0] + " " + name[1]}</p>
        </div>
      );
    }
        return (
          
          // <div className = "playerCard">
          //   <img className = "portrait" src = {pic}/>
          //   <p className = "playerName">{name[0] + " " + name[1]}</p>
          // </div>
          <div>

          </div>
        );
      }
    }

export default playercard
