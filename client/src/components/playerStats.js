import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export class playerStats extends Component {
    constructor() {
      super();
      this.state = {
        indPlayers: [],
      };
    }
    componentDidMount(){
        const { players } = this.props.location.state
        this.setState({
          indPlayers: players,
        })

    }

    render() {
        //console.log(this.state.indPlayers)
        var number = this.state.indPlayers[0];
        var firstName = this.state.indPlayers[2];
        var lastName = this.state.indPlayers[1];
        var position = this.state.indPlayers[3];
        var height = this.state.indPlayers[4];
        var weight = this.state.indPlayers[5];
        var year = this.state.indPlayers[6];
        var hometown = this.state.indPlayers[7];
        console.log(firstName==null)
<<<<<<< Updated upstream
        if (this.state.indPlayers !=null){
            var photoPath = "/images/photos/"+firstName.toLowerCase()+lastName.toLowerCase()+".jpg"
=======
        if (firstName !=null){
            {/*var photoPath = "../pictures/photos/"+firstName.toLowerCase()+lastName.toLowerCase()+".jpg"*/}
            var photoPath = '../pictures/photos/samwezniak.jpg'
>>>>>>> Stashed changes
          return (
              <div className = "page">
                  <p className = "title" > Player Statistics</p>
                  <div className = "timeFrame">
                      <p className = "timeFrameButton"> Last Game</p>
                      <p className = "timeFrameButton"> This Season</p>
                      <p className = "timeFrameButton"> Career</p>
                  </div>
                  <div className = "playerBio">
                      {/* insert image here  */}
                      <img src = {require("../pictures/photos/"+firstName.toLowerCase()+lastName.toLowerCase()+".jpg")}></img>
                      <div className = "bioInfo">
                          <p> {number} {firstName + " " +lastName}</p>
                          <p> Position: {position}</p>
                          <p> Height: {height}</p>
                          <p> Weight: {weight} </p>
                          <p> Class: {year}</p>
                          <p> Hometown/ Last School: {hometown}</p>

                      </div>


                  </div>
              </div>
<<<<<<< Updated upstream
  
=======

          )
        }
        return (
            <div className = "page">

            </div>
>>>>>>> Stashed changes

        );

    }
  }
}



export default playerStats
