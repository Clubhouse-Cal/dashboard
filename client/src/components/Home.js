import React, { Component } from 'react';
//import Menu from './Menu';
import PlayerScroll from './playerScroll';
import Dropdown from './dropdown';
import TeamPreview from './teamPreview'

export class Home extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     players: [],
  //     playerFirstLastName: [],
  //     leader: []
  //   };
  // }

//   componentDidMount() {
//     fetch('/api/players')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({
//           players: data.data,
//           playerFirstLastName: data.data.map(d => [d[2],d[1]]),
//           leader: ["Arman", "Sabouri"],
//         })
//       });
// }
  
 
  render() {
    var playerFirstLastName = this.props.players.map(d => [d[2], d[1]]);
    var leader = ["Arman", "Sabouri"];
    console.log(playerFirstLastName);
    return (
      <div className = "page">
          <p className = "title">Home</p>
          <div className = "dropdown">
            <p> Filter by: </p>
            <Dropdown/>
          </div>
          <div className = "playerScroll">
            <PlayerScroll names={playerFirstLastName}/>
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
