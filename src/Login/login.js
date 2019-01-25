import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import LoginApi from "./api";

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
  handleBlur = field => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
  onSubmit = () => {
    const { email, password } = this.state;

    LoginApi({ email: email, password: password }).then(res => {
      if (res.status == 401) {
        alert("Not matched");
      } else if (res.status == 200) {
        window.location.assign("/admin");
      }
    });
  };

  onChange = (e, data) => {
    this.setState({
      [data.name]: data.value
    });
  };

  render() {
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
              onChange={this.onChange}
            />

            <Form.Input
              fluid
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onBlur={this.handleBlur}
              onChange={this.onChange}
            />
          </Form.Group>

          <Form.Button type="submit" onClick={this.onSubmit}>
            Submit
          </Form.Button>
        </Form>
      </Segment>
    );
  }
}
export default Login;
