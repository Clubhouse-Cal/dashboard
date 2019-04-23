import React, { Component } from 'react'
import { Image, Header, Button } from 'semantic-ui-react'

export class importData extends Component {
  render() {
    return (
      <div className = "page">
          <Header as='h1' style={{fontSize: '30px'}}>Import Data</Header>
          <Image src='/images/trackman.jpg' size='medium' />
          <Button color='blue'>Import Data</Button>
      </div>
    )
  }
}

export default importData
