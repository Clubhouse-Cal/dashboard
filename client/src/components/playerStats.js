import React, { Component } from 'react'
import { Header, Image } from 'semantic-ui-react'

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
        if (firstName !=null){
            var photoPath = "/images/photos/"+firstName.toLowerCase()+lastName.toLowerCase()+".jpg"
          return (
              <div className = "page">
                  <Header as='h1'> Player Statistics </Header>
                  <div className = "timeFrame">
                      <p className = "timeFrameButton"> Last Game</p>
                      <p className = "timeFrameButton"> This Season</p>
                      <p className = "timeFrameButton"> Career</p>
                  </div>
                  <div className = "playerBio">
                    <div className = "card">
                        <div className= "back">
                            <Image src={photoPath} width='200px' height = '275px;'/>
                            <div className = "bioInfo">
                                <div className = "name">
                                    <p> {'#' + number} {firstName + " " +lastName}</p>
                                </div>
                                <p> <b>Position:</b> {position}</p>
                                <p> <b>Height:</b> 5'11"</p>
                                <p> <b>Weight:</b> {weight} </p>
                                <p> <b>Class:</b> {year}</p>
                                <p> <b>Hometown/ Last School:</b> {hometown}</p>
                            </div>
                        </div>
                    </div>
                      
                      <Image src='/images/armanstats.png'/>


                  </div>
              </div>

          )
        }
        return (
            <div className = "page">

            </div>

        );

    }
}



export default playerStats
