import React, { Component } from 'react'

export class playerStats extends Component {
  render() {
      //console.log(this.props.players);
      var number = this.props.players.map(d => d[0]);
      var firstName = this.props.players.map(d => d[2]);
      var lastName = this.props.players.map(d => d[1]);
      var position = this.props.players.map(d => d[3]);
      var height = this.props.players.map(d => d[4]);
      var weight = this.props.players.map(d => d[5]);
      var year = this.props.players.map(d => d[6]);
      var hometown = this.props.players.map(d => d[7]);
      //console.log(name);
    return (
        <div className = "page">
            <p className = "title" > Player Statistics</p>
            <div className = "timeFrame">
                <p className = "timeFrameButton"> Last Game</p>
                <p className = "timeFrameButton"> This Season</p>
                <p className = "timeFrameButton"> Career</p>
            </div>
            <div className = "playerBio">
                {/* insert image here  */}
                <img src = {require("../pictures/photos/"+firstName[0].toLowerCase()+lastName[0].toLowerCase()+".jpg")} alt="helllo"></img>
                <div className = "bioInfo">
                    <p> {number[0]} {firstName[0] + " " +lastName[0]}</p>
                    <p> Position: {position[0]}</p>
                    <p> Height: {height[0]}</p>
                    <p> Weight: {weight[0]} </p>
                    <p> Class: {year[0]}</p>
                    <p> Hometown/ Last School: {hometown[0]}</p>

                </div>

            </div>
        </div>

    )
  }
}

export default playerStats
