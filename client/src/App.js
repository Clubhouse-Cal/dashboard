import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './pictures/Logo.png'
import './App.css';
import Login from './components/Login';
import Menu from './components/Menu';
import home from './components/Home';
import nextMatchup from './components/nextMatchup';
import settings from './components/Settings';
import importData from './components/importData';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path = "/login" render = {props =>(
          <React.Fragment>
            <img src={logo} alt = "logo" width = {350} height = {250}/>
            <Login/>
          </React.Fragment>
        )} />
        <Route path = "/home" component= {home}/>
        <Route path = "/nextMatchup" component= {nextMatchup}/>
        <Route path = "/importData" component= {importData}/>
        <Route path = "/settings" component= {settings}/>
        
        
        <Menu/>
        {/* <Menu/> */}
      </div>
      </Router>
    );
  }
}

export default App;
