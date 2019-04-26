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
    // index of upcoming game in schedule
    var upcomingIndex = 36
    var upcomingGameDate = "April 26"
    var upcomingGame = this.state.schedule[upcomingIndex]
    // var test = upcomingGame[2]
    // console.log(upcomingGame[2])
    var homeaway = "vs."
    // if (upcomingGame[2] == "A") {
    //   homeaway = "@"
    // }
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
            <TeamPreview leader = {leader}/>
            <Header as='h1' style={{fontSize: '100px'}}>{homeaway}</Header>
            <TeamPreview leader = {leader}/>
          </div>

        </div>
    )
  }
}

export default Homepage