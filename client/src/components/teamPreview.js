import React, { Component } from 'react'
import Playercard from './playercard'
import { Header } from 'semantic-ui-react'

export class teamPreview extends Component {
  render() {
    // console.log(this.props.hitter)
    return (
      <div className = "teamPreview">
          <div className = "teamName">
            <Header as='h4'>{this.props.school} </Header>
            <p> ( 1-0 )</p>
          </div>

          <div className = "genStats">
            <div>
              <p>Current streak: 1W</p>
              <p>Team Average: 0.280</p>
              <p>Team ERA: 3.2</p>
            </div>

            <div>
              <p>Last Game: W</p>
              <p>6-4</p>
              <p>@ UC Santa Barbara</p>
            </div>
          </div>
          <br>
          </br>
          <div className = "teamLeaders">
            <div className = "leaders">
              <p>Starting Pitcher</p>
              <Playercard name = {this.props.leader}/>
            </div>
            <div className = "leaders">
              <p>Top Hitters</p>
              <Playercard name = {this.props.hitter}/>
            </div>


          </div>




      </div>
    )
  }
}

export default teamPreview
