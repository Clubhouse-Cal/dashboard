import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to = "/login"> Login </Link> | 
        <Link to = "/home"> Home </Link> | 
        <Link to = "/nextMatchup"> Next Matchup </Link> | 
        <Link to = "/importData"> Import Data </Link> | 
        <Link to = "/settings"> Settings </Link>
      </React.Fragment>
    )
  }
}

export default Menu
