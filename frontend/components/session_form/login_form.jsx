import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import Footer from "../footer/footer";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.phantomLogin = this.phantomLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(this.setState({
        email: "",
        password: ""
      }))
  }

  renderErrors(){
    return (
      <ul className="login-errors">
        {this.props.errors.map( (error, idx) => {
          return (
            <li 
              key={idx}>
              {error}
            </li>
          )
        })}
      </ul>
    )
  }

  phantomLogin() {
    this.props.login({ email: "demo@earmark.com", password: "123456"});
  }

  render() {
    return (
      <div>
        <NavBarContainer />
        <div className="login-page">
          <div className="login-img">
            <img 
              src={window.earmark}
              onClick={() => this.props.history.push("/")}
            />
          </div>

          <form 
            className="login-form"
            onSubmit={this.handleSubmit}
          >

            <h2>Welcome To Earmark</h2>

            {this.renderErrors() ? this.renderErrors() : ""}


            <div className="login-form-label">
              Email address
              <input 
                type="text"
                className="login-form-input"
                id="email"
                value={this.state.email}
                onChange={this.handleChange("email")}
              />
            </div>

            <div className="login-form-label">
              Password
              <input 
                type="password"
                className="login-form-input"
                id="password"
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
            </div>

            <div>
              <input 
                type="submit"
                className="login-button"
                value={this.props.formType}
              />

              <a
                className="demo-button"
                onClick={this.phantomLogin}
              >
                Demo
              </a>

            </div>
            <div className="login-form-forgot">
              Forgot your password? Log in with the demo user.
            </div>
          </form>
        </div>
        <Footer />
      </div>

    )
  }
}

export default LoginForm;