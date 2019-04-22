import React, { Component } from 'react'

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
        console.log(this.state.indPlayers)
        var number = this.state.indPlayers[0];
        var firstName = this.state.indPlayers[2];
        var lastName = this.state.indPlayers[1];
        var position = this.state.indPlayers[3];
        var height = this.state.indPlayers[4];
        var weight = this.state.indPlayers[5];
        var year = this.state.indPlayers[6];
        var hometown = this.state.indPlayers[7];
        console.log(firstName==null)
        if (this.state.indPlatyers !=null){
            var photoPath = "../pictures/photos/"+firstName.toLowerCase()+lastName.toLowerCase()+".jpg"
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
                      <img src = {require(photoPath)} alt="helllo"></img>
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

          )
        }
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

        );

    }
  }



export default playerStats
