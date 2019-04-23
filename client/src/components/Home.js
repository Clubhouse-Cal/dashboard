import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './Menu';
import PlayerStatistics from './playerStats';
import NextMatchup from './nextMatchup';
import Settings from './Settings';
import ImportData from './importData';
import Homepage from './Homepage';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      players: [],
    };
  }
  componentDidMount() {
    fetch('/api/players')
      .then(res => res.json())
      .then(data => {
        this.setState({
          players: data.data,
        })
      });
  }

  render() {
    return (
      <React.Fragment>
      <Router>
        <Menu />
      <Route path = "/home" render={(props) => (<Homepage {...props} players={this.state.players}/>)}/>
      <Route path = "/playerStats" render={(props) => (<PlayerStatistics {...props} players={this.state.players}/>)}/>
      <Route path = "/nextMatchup" component= {NextMatchup}/>
      <Route path = "/importData" component= {ImportData}/>
      <Route path = "/settings" component= {Settings}/>
      </Router>
      
      </React.Fragment>
    )
  }
}

export default Home
