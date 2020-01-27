import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />

          <CustomButton type="submit" value="Submit Form">
            Sign in
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
