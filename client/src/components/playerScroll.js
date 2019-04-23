import React, { Component } from 'react';
import Playercard from './playercard';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PlayerStatistics from './playerStats';
import Menu from './Menu';
import {Link} from 'react-router-dom';
import LinkButton from './LinkButton'

export class playerScroll extends Component {



  render() {
    return this.props.data.map(indPlayerdata=>
    <div>
    <Link to = {{
        pathname: './playerStats', state: {players: indPlayerdata}
    }}>

    {/*<button onClick = {this.handleClick.bind(this, indPlayerdata)}>*/}
    <Playercard name={[indPlayerdata[2], indPlayerdata[1]]}/>
    {/*</button>*/}
    </Link>
    </div>
    );
  }
}

export default playerScroll
