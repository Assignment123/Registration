import React, { Component } from "react";
import { Form, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { NavLink } from "react-router-dom";
import {callApi} from "./api";
const validate = (first_name, last_name, email) => {
  return {
    first_name: first_name === "",
    last_name: last_name === "",
    email: email === ""
  };
};
const PasswordValidate = password => {
  let regex = "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$";
  if (password === "" && !regex) {
    return "Error";
  } else {
    return regex.test(password);
  }
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      referral_code: "",

      touched: {
        first_name: false,
        last_name: false,
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
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = data => {
    return Registration(data).then(window.location.assign("/login"));
  };
  onSubmit = e => {
    // console.log("sdhbfshdf");
    if (!this.shouldSubmitted()) {
      e.preventDefault();
      const { first_name, last_name, email, password } = this.submitForm(
        this.state.data
      );
    }
  };
  shouldSubmitted() {
    const errors = validate(
      this.state.first_name,
      this.state.last_name,
      this.state.email
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    return !isDisabled;
  }

  render() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const MarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];
      return hasError ? shouldShow : false;
    };
    return (
      <Segment inverted>
        <h1>Register</h1>
        <Form inverted onSubmit={this.onSubmit.bind(this)}>
          <Form.Group widths="equal">
            <Form.Input
              className={MarkError("first_name") ? "error" : ""}
              fluid
              label="First name"
              placeholder="First name"
              name="first_name"
              type="text"
              value={this.state.first_name}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />

            <Form.Input
              className={MarkError("last_name") ? "error" : ""}
              fluid
              label="Last name"
              placeholder="Last name"
              name="last_name"
              type="text"
              value={this.state.last_name}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />

            <Form.Input
              className={MarkError("email") ? "error" : ""}
              fluid
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />

            <Form.Input
              className={MarkError("password") ? "error" : ""}
              fluid
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />

            <Form.Input
              className={MarkError("confirm_password") ? "error" : ""}
              fluid
              label="Confirm Password"
              placeholder="Confirm Password"
              name="confirm_password"
              type="password"
              value={this.state.confirm_password}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
            <Form.Input
              className={MarkError("referral_code") ? "error" : ""}
              fluid
              label="Referral Code"
              placeholder="Referral Code"
              type="text"
              name="referral_code"
              value={this.state.referral_code}
              onChange={this.onChange}
              onBlur={this.handleBlur}
            />
          </Form.Group>

          <Form.Button
            disabled={isDisabled}
            type="submit"
            onClick={this.onSubmit}
          >
            <NavLink to="/login">Submit</NavLink>
          </Form.Button>
        </Form>
      </Segment>
    );
  }
}
export default RegisterForm;
