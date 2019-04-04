import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
import logo from '../pictures/Logo.png'

export default () => (
    <div className = "login">
    <img src={logo} alt = "logo" width = {350} height = {250}/>
        <Form>
            <Form.Input
            label= "Username"
            />
            <Form.Input
            label= "Password"
            type="password"
            />

            <Button color="light blue" fluid size="large">
            Sign in
            </Button>
            <Message>
                New User? <a href="#">Create New Account</a>
            </Message>
        </Form>
    </div>
  

);