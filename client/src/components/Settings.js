import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'

export class Settings extends Component {
  render() {
    return (
      <div className = "page">
        <Header as='h1' style={{fontSize: '30px'}}>Settings</Header>
      </div>

    )
  }
}

export default Settings
