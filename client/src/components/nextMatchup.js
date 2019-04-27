import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export class nextMatchup extends Component {
  render() {
    return (
      <div className = "page">
        <Header as='h1'>Next Matchup</Header>
        <Header as='h3'>Upcoming game on 5/3/2019</Header>
        <div className = "teamSelect">
          <p className = "team1">
            Cal
          </p>
          <p className = "team2">
            Utah
          </p>
        </div>
        <Header as='h2'>Starting Pitcher</Header>
        <Image src = "/images/photos/armansabouri.jpg"></Image>
        <Header as='h3'>Arman Sabouri</Header>
        
        <div className = "generateButton">
          <Link to = './pitcherAnalysis'>
          <div className = "text">
            View Pitcher Analysis
          </div>
         
          </Link>
        </div>
    </div>
    )
  }
}

export default nextMatchup
