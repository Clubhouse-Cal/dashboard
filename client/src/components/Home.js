import React, { Component } from 'react'
import Menu from './Menu';

export class Home extends Component {
  componentDidMount() {
    fetch('/api/players')
  }

  render() {
    return (
      <React.Fragment>
          <p>Home</p>
      </React.Fragment>
    )
  }
}

export default Home
