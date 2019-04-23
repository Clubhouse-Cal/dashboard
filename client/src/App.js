import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Router>
        <Route exact path = "/login" component = {Login}/>
        <Route path = "/home" component={Home}/>
      </Router>
      </div>
    );
  }
}

export default App;
