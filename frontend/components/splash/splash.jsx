import React from "react";

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { push } = this.props.history;

    return (
      <div>
        <header className="splash-header">

          <a 
            className="splash-logo"
            href="/"
          >
            Earmark
          </a>
          
          <div>

            <a 
              className="splash-login"
              href="/#/login"
              >Log in
            </a>

            <a 
              className="splash-signup"
              href="/#/signup"
            >Sign up
            </a>
            
          </div>
          
        </header>


        <main className="splash-main">
          
          <div className="splash-main-left">
            <h1 className="splash-left-header">
              <p>
                Less stress when sharing expenses 
              </p>
              <span className="splash-left-span">
                with housemates.
              </span>
            </h1>

            <div className="splash-left-div">
              <p>
                Keep tracking of your shared expenses and balances with 
                housemates, friends, and family.
              </p>
              
              <a
                className="splash-left-signup"
                href="/#/signup"
              >Sign Up
              </a>
            </div>

          </div>

          <div className="splash-main-right">
            
              Image Here.
            
          </div>

        </main>
      </div>

    )
  }
}

export default Splash;