import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <div>Earmark Nav Bar</div>
        <button onClick={this.props.logout}>Logout</button>
      </header>
    )
  }
}

export default NavBar;