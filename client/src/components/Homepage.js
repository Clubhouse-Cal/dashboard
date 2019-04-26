import React, { Component } from 'react';
import PlayerScroll from './playerScroll';
import Dropdown from './dropdown';
import TeamPreview from './teamPreview';
import { Header } from 'semantic-ui-react';

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      schedule: [],
    };
  }

  componentDidMount(){
    fetch('/api/schedule')
    .then(res => res.json())
    .then(data => {
      this.setState({
        schedule: data.data,
      })
    })
}
  render () {
    var leader = ["Arman", "Sabouri"];
    var hitter = ["Andrew", "Vaughn"];
    var leader1 = ["Oliver", "Dunn"];
    var hitter1 = ["Zac", "McCleve"];
    // index of upcoming game in schedule
    var upcomingIndex = 41
    var upcomingGameDate = "May 3"
    var upcomingGame = this.state.schedule[upcomingIndex]
    if (upcomingGame != null) {
      console.log(upcomingGame)
      var homeaway = "vs."
      if (upcomingGame[2] == "A") {
        homeaway = "@"
      }
    }
    return (
      <div className = "page">
          <Header as='h1' >California Golden Bears Baseball 2019</Header>
          <div className = "dropdown">
            <Header as='h3'> Filter by: </Header>
            <Dropdown/>
          </div>
          <div className = "playerScroll">
            <PlayerScroll data = {this.props.players}/>
          </div>

          <Header as='h2'>Upcoming game on {upcomingGameDate}</Header>
          <div className = "nextGame">
            <TeamPreview school = {'California Golden Bears'} leader = {leader} hitter = {hitter}/>
            <Header as='h1' style={{fontSize: '100px'}}>{homeaway}</Header>
            <TeamPreview school = {'Utah Utes'} leader = {leader1} hitter = {hitter1}/>
          </div>

        </div>
    )
  }
}

export default Homepage