import React, { Component } from 'react';

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: null
    } ;
  }

  render() {
    return (
      <form>THIS IS THE LOG IN FORM</form >
    );
  }
}

export default Login
