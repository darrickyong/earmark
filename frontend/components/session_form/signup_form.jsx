import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "", 
      email: "", 
      password: "",
      showSecondary: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }
  
  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value, showSecondary: true })
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
        <h2>INTRODUCE YOURSELF</h2>
        {this.renderErrors()}

        <label>Hi there! My name is
          <br/>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange("name")}
          />
        </label>
        
        {this.state.showSecondary ? (
          <div className="secondary-fields">
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
          </div>
        ) : "" } 

        <br/>

        <button className="sign-up-button">{this.props.formType}</button>
      </form>
    )
  }
}

export default SignupForm;
