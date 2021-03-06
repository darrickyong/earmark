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
      <ul className="signup-errors">
        {this.props.errors.map((error, idx) => {
          return (
            <li 
              className="signup-error"
              key={idx}>
              
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
          <img
            src={window.earmark}
            onClick={() => this.props.history.push("/")}
          />
        </div>

        <form 
          className="signup-form"
          onSubmit={this.handleSubmit}
        >

          <h2>Introduce Yourself</h2>
          {this.renderErrors() ? this.renderErrors() : ""}

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
            className="signup-button"
            value={this.props.formType}
          />

          <div className="signup-form-agree">
            By signing up, you are not agreeing to any Terms of Service.
          </div>
        </form>

      </div>
    
    )
  }
}

export default SignupForm;
