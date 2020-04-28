import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <header className="nav-bar">
        <div className="logo">Earmark Nav Bar</div>
        <div>
          {this.props.user.name.split(" ")[0]}
          <button 
            className="logout-button"
            onClick={this.props.logout}
          >Logout
          </button>
        </div>
      </header>
    )
  }
}

export default NavBar;