import React, { Component } from 'react';
import {
  Button,
  Form,
  Image
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        this.props.history.push("/home")
    }
    render() {
      return (
        <div className="login">
            <Image src='/images/Logo.png' size='medium' />
            <p>
            <Form>
                <Form.Input
                label= "Username"
                />
                <Form.Input
                label= "Password"
                type="password"
                />
            </Form>
            </p>
            <p>
            <Button color="blue" fluid size="large" onClick={this.routeChange}>
            Sign in
            </Button>
            </p>
            <p>
            <Button positive fluid size="large">
            New User? Create an Account
            </Button>
            </p>
        </div>
        )
    }
}

export default withRouter(Login);
