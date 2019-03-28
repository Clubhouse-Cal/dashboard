import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

export default () => (
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
  

);