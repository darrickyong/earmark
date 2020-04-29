import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <header className="nav-bar">
        <div className="nav-logo">Earmark Nav Bar</div>
        
        {this.props.currentUser ? (
          <div>
            {this.props.user.name.split(" ")[0]}
            <button 
              className="nav-logout-button"
              onClick={this.props.logout}
            >Logout
            </button>
          </div>
        ) : (
          <div>
              <a
                href="/#/login"
                className="nav-login-button"
              >
                Log in
            </a>
            
            or

            <a 
              href="/#/signup"
              className="nav-signup-button"
            >
              Sign up
            </a>
          </div>
        )}
        



      </header>
    )
  }
}

export default NavBar;