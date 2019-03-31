import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../pictures/Logo.png'
import home from '../pictures/noun_Home_2292240.png'
import nm from '../pictures/noun_Planning_580767.png'
import data from '../pictures/noun_import_147117.png'
import set from '../pictures/noun_Settings_2292476.png'

export class Menu extends Component {
  render() {
    return (
      <div className = "list">
        <img src={logo} alt = "logo" width = {200} height = {175}/>
        <Link className = "path" to = "/login"> Login </Link>   
        <Link className = "path" to = "/home"> 
        <img src = {home} width = {30} height = {30}/>
        Home
        </Link>  
        <Link className = "path" to = "/nextMatchup">
        <img src = {nm} width = {30} height = {30}/>
        Next Matchup 
        </Link>   
        <Link className = "path" to = "/importData"> 
        <img src = {data} width = {30} height = {30}/>
        Import Data 
        </Link>  
        <Link className = "path" to = "/settings"> 
        <img src = {set} width = {30} height = {30}/>
        Settings 
        </Link> 
      </div>
    )
  }
}
const pathStyle = {
  width: 50,
  height: 30,
  flex: 1,
  backgroundColor: '#003366',
  color: 'white',
  alignContent: 'center'
  
}
const listStyle = {
  flex: 1,
  backgroundColor: 'red',
  flexDirection: 'row',
  justifyContent: 'space-between'

}
export default Menu
