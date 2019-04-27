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
        <div className = "row1">
          <Image src = "/images/arman.png" width = '300px' height = "400px"></Image>
          <Image src = "/images/spraychart.png" width = '400px' height = "400px"></Image>
        </div>
        <div className = "row1">
          <Image src = "/images/swingrate.png" width = '400px' height = "400px"></Image>
          <Image src = "/images/whiffrate.png" width = '400px' height = "400px"></Image>
        </div>
        
        
      </div>
    )
  }
}

export default pitcherAnalytics
