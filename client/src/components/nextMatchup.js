import React, { Component } from 'react'

export class nextMatchup extends Component {
  render() {
    return (
      <div className = "page">
        <p className = "title" >Next Matchup</p>
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
