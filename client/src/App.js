import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from './pictures/Logo.png'
import './App.css';
import Login from './components/Login';
import Menu from './components/Menu';
import Home from './components/Home';
import NextMatchup from './components/nextMatchup';
import Settings from './components/Settings';
import ImportData from './components/importData';

//ReactDOM.render(<App />, document.getElementById('root'));

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Menu/>
        <Route exact path = "/login" render = {props =>(
          <React.Fragment>
            {/* <img src={logo} alt = "logo" width = {350} height = {250}/> */}
            <Login/>
          </React.Fragment>
        )} />
        <Route path = "/home" component= {Home}/>
        <Route path = "/nextMatchup" component= {NextMatchup}/>
        <Route path = "/importData" component= {ImportData}/>
        <Route path = "/settings" component= {Settings}/>
        
        
        
      </div>
      </Router>
    );
  }
}



export default App;
