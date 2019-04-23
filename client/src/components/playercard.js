import React, { Component } from 'react';

export class playercard extends Component {

  render() {
    var name = this.props.name;
    if (name!=null){
      var imageSrc = '/images/photos/'+name[0].toLowerCase()+name[1].toLowerCase()+'.jpg'
      return (

        <div className = "playerCard">
        <img className = "portrait" src = {imageSrc}/>
        <p className = "playerName">{name[0] + " " + name[1]}</p>

        </div>
      );
    }
        return (
          <div>

          </div>
        );
      }
    }

export default playercard
