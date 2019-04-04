import React, { Component } from 'react';
//import Menu from './Menu';
import PlayerScroll from './playerScroll';
import Dropdown from './dropdown';


export class Home extends Component {
  componentDidMount() {
    fetch('/api/players')
  }

  render() {
    return (
      <div className = "page">
          <p className = "title">Home</p>
          <p> Filter by: </p>
          <div className = "dropdown">
          <Dropdown/>
          </div>
          
          <PlayerScroll/>
      </div>
    )
  }
}

export default Home
