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
        <div className="signup-img">
          Image Here.
        </div>

        <form 
          className="signup-form"
          onSubmit={this.handleSubmit}
        >

          <h2>Introduce Yourself</h2>
          {this.renderErrors()}


          <div className="signup-form-label">
            Hi there! My name is
            <input
              type="text"
              className="signup-form-input"
              value={this.state.name}
              onChange={this.handleChange("name")}
            />
          </div>
          
          {this.state.showSecondary ? (
            <div className="secondary-fields">

              <div className="signup-form-label">
                Here’s my <strong>email address</strong>:
                <input
                  type="text"
                  className="signup-form-input"
                  value={this.state.email}
                  onChange={this.handleChange("email")}
                />
              </div>
              
              <div className="signup-form-label">
                And here's my <strong>password</strong>:
                <input
                  type="password"
                  className="signup-form-input"
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                />
              </div>
              
            </div>
          ) : "" } 

          <input 
            type="submit"
            className="sign-up-button"
            value={this.props.formType}
          />
        </form>

      </div>
    
    )
  }
}

export default SignupForm;
