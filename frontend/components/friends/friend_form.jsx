import React from "react";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.createFriendship(this.state)
      .then(this.props.closeModal);
  }
  
  renderErrors() {
    return (
      <ul
        className="friend-errors"
      >
        {this.props.errors.map((error, idx) => {
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

  render() {
    return (
      <div className="friend-form">
        <h2 className="friend-form-header">
          Add a friend
          <div
            className="friend-form-close"
            onClick={this.props.closeModal}
          >X</div>
        </h2>
      <div className="friend-form-body">
        <div className="friend-form-message">
          Enter your friend's email to add: 
        </div>
        <input 
          type="text"
          className="friend-form-email"
          placeholder="example@earmark.com"
          onChange={this.handleChange("email")}
          value={this.state.email}
        />
        
        {this.renderErrors() ? this.renderErrors() : ""}

      </div>

        <div className="friend-form-footer">
          <button
            className="friend-form-cancel"
            onClick={this.props.closeModal}
          >Cancel</button>
          <button
            onClick={this.handleSubmit}
            className="friend-form-add"
          >Add Friend</button>

        </div>
      </div>
    )
  }
}

export default FriendForm;