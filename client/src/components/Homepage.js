import React, { Component } from 'react';
import PlayerScroll from './playerScroll';
import Dropdown from './dropdown';
import TeamPreview from './teamPreview'

class Homepage extends Component {
  render () {
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

export default Homepage