import React, { Component } from 'react'

export class playerStats extends Component {
  render() {
    return (
        <React.Fragment>
            <div className = "page">
                <p className = "title" > Player Statistics</p>
            </div>
            <div className = "timeFrame">
                <p>
                    Last Game
                </p>
                <p>
                    This Season
                </p>
                <p>
                    Career
                </p>
            </div>
            <div className = "playerBio">
                {/* insert image here  */}
                <img src = {"132.png"}></img>
                <div className = "bioInfo">
                    <p> Insert Name</p>
                    <p> Position: </p>
                    <p> Weight: </p>
                    <p> Hometown: </p>
                    <p> Height: </p>
                    <p> Class: </p>
                
                </div>


            </div>
        </React.Fragment>
        
    )
  }
}

export default playerStats
