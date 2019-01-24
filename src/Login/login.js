import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",

      touched: {
        email: false,
        password: false
      }
    };
  }
  handleBlur = field => e => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
 
  render(){
    return (
      <Segment inverted>
        <h1>Login</h1>
        <Form inverted>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Email"
              placeholder="Email"
              name="email"
              type="text"
              value={this.state.email}
              onBlur={this.handleBlur}
            />

            <Form.Input
             
              fluid
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.last_name}
              onBlur={this.handleBlur}
            />

          </Form.Group>

          <Form.Button
            type="submit"
            onClick={this.onSubmit}
          >Submit
          </Form.Button>
        </Form>
      </Segment>
    );
  }
}
export default Login;
