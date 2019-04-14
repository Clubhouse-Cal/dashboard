import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './pictures/Logo.png'
import './App.css';
import Login from './components/Login';
import Menu from './components/Menu';
import Home from './components/Home';
import PlayerStatistics from './components/playerStats';
import NextMatchup from './components/nextMatchup';
import Settings from './components/Settings';
import ImportData from './components/importData';

//ReactDOM.render(<App />, document.getElementById('root'));

class App extends Component {

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
      <Router>
      <div className="App">
      <Menu/>
        <Route exact path = "/login" component = {Login}/>
        <Route path = "/home" render={(props) => (<Home {...props} players={this.state.players}/>)}/>
        <Route path = "/playerStats" render={(props) => (<PlayerStatistics {...props} players={this.state.players}/>)}/>
        <Route path = "/nextMatchup" component= {NextMatchup}/>
        <Route path = "/importData" component= {ImportData}/>
        <Route path = "/settings" component= {Settings}/>
        
        
        
      </div>
      </Router>
    );
  }
}



export default App;
