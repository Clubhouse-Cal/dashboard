import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react'

export class pitcherAnalytics extends Component {
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
        <Image src = "/images/pitcherAnalysis.png" width = '800px'></Image>
      </div>
    )
  }
}

export default pitcherAnalytics
