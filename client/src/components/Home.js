import React, { Component } from 'react';
//import Menu from './Menu';
import PlayerScroll from './playerScroll';
import Dropdown from './dropdown';
import TeamPreview from './teamPreview'

export class Home extends Component {


  render() {
    var playerFirstLastName = this.props.players.map(d => [d[2], d[1]]);
    var playerData = this.props.players.map(d => d);
    var leader = ["Arman", "Sabouri"];
    return (
      <div className = "page">
          <p className = "title">Home</p>
          <div className = "dropdown">
            <p> Filter by: </p>
            <Dropdown/>
          </div>
          <div className = "playerScroll">
            <PlayerScroll data = {playerData}/>
          </div>

          <p> Upcoming game on 10/14/2018</p>
          <div className = "nextGame">
            <TeamPreview leader = {leader}/>
            <TeamPreview leader = {leader}/>
          </div>

      </div>
    )
  }
}

export default Home
