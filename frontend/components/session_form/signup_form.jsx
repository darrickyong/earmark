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
      <div className="signup-page">
        <div>

        </div>

        <form 
          className="signup-form"
          onSubmit={this.handleSubmit}
        >

          <h2>INTRODUCE YOURSELF</h2>
          {this.renderErrors()}

          <label className="signup-form-input">Hi there! My name is
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange("name")}
            />
          </label>
          
          {this.state.showSecondary ? (
            <div className="secondary-fields">

              <label className="signup-form-input">Here’s my email address:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                />
              </label>

              <label className="signup-form-input">And here’s my password:
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                />
              </label>
              
            </div>
          ) : "" } 
          <button className="sign-up-button">{this.props.formType}</button>
        </form>

      </div>
    
    )
  }
}

export default SignupForm;
