import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", password: "" }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => {
          return (
            <li key={idx}>
              {error}
            </li>
          )
        })}
      </ul>
    )
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <label>Hi there! My name is
          <br/>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange("name")}
          />
        </label>
        <br/>
        <label>Here’s my email address:
          <br/>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange("email")}
          />
        </label>
        <br/>
        <label>And here’s my password:
          <br/>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
        </label>
        <br/>
        {this.renderErrors()}
        <br/>
        <button className="sign-up-button">{this.props.formType}</button>
      </form>
    )
  }
}

export default SignupForm;
