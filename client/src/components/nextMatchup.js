import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export class nextMatchup extends Component {
  render() {
    return (
      <div className = "page">
        <Header as='h1' style={{fontSize: '30px'}}>Next Matchup</Header>
        <p> Upcoming game on 10/14/2018</p>
        <div className = "teamSelect">
          <p className = "team1">
            Cal
          </p>
          <p className = "team2">
            UCSB
          </p>
        </div>
    </div>
    )
  }
}

export default nextMatchup
