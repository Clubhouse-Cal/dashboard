import React, { Component } from 'react';
//import Menu from './Menu';
import PlayerScroll from './playerScroll';
import Dropdown from './dropdown';

export class Home extends Component {
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
