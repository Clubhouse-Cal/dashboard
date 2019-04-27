import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Image } from 'semantic-ui-react'

export class Menu extends Component {
  render() {
    return (
      <div className = "bar">
      <Image src='/images/Logo.png'/>
        <div className = "list">


          <Link className = "path" to = "/home">
          <Image src='/images/noun_Home_2292240.png' style={{width: '40px', height: '40px', margin: '10px'}}/>
          Home
          </Link>

          <Link className = "path" to = "/nextMatchup">
          <Image src='/images/noun_Planning_580767.png' style={{width: '40px', height: '40px', margin:'10px'}}/>

          Next Matchup
          </Link>
          <Link className = "path" to = "/importData">
          <Image src='/images/noun_import_147117.png' style={{width: '40px', height: '40px', margin:'10px'}}/>

          Import Data
          </Link>
          <Link className = "path" to = "/settings">
          <Image src='/images/noun_Settings_2292476.png' style={{width: '40px', height: '40px', margin:'10px'}}/>

          Settings
          </Link>
        </div>
        <Image src='/images/cal.png' style={{width: '150px', height: '200px'}}/>
        <Image src='/images/mneu.png' />
      </div>

    )
  }
}

export default Menu
