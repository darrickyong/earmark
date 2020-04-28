import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: ""}
    this.handleSubmit = this.handleSubmit.bind(this)
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
      <ul>
        {this.props.errors.map( (error, idx) => {
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
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Email:
          <input 
            type="text"
            value={this.state.email}
            onChange={this.handleChange("email")}
          />
        </label>
        <br/>
        <label>Password:
          <input 
            type="password"
            value={this.state.password}
            onChange={this.handleChange("password")}
          />
        </label>
        <br/>
        <button>{this.props.formType}</button>
        {this.renderErrors() ? this.renderErrors() : ""}
      </form>
    )
  }
}

export default LoginForm;