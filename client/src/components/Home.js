import React, { Component } from 'react';
//import Menu from './Menu';
import PlayerScroll from './playerScroll';
import Dropdown from './dropdown';
import TeamPreview from './teamPreview'

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      playerFirstLastName: [],
      leader: []
    };
  }

  componentDidMount() {
    fetch('/api/players')
      .then(res => res.json())
      .then(data => {
        this.setState({
          players: data.data,
          playerFirstLastName: data.data.map(d => [d[2],d[1]]),
          leader: ["Arman", "Sabouri"],
        })
      });
}
 
  render() {
    console.log(this.state.players);
    return (
      <div className = "page">
          <p className = "title">Home</p>
          <div className = "dropdown">
            <p> Filter by: </p>
            <Dropdown/>
          </div>
          <div className = "playerScroll">
            <PlayerScroll names={this.state.playerFirstLastName}/>
          </div>
          
          <p> Upcoming game on 10/14/2018</p>
          <div className = "nextGame">
            <TeamPreview leader = {this.state.leader}/>
            <TeamPreview leader = {this.state.leader}/>
          </div>
          
      </div>
    )
  }
}

export default Home
