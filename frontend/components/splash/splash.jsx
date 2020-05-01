import React from "react";
import Footer from "../footer/footer";

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { push } = this.props.history;

    return (
      <div>
        <header className="splash-header">

          <div className="splash-logo">
            <img
              src={window.earmark}
              className="splash-logo-image"
            />
            <a 
              className="splash-logo-name"
              href="/"
            >
              Earmark
            </a>
          </div>
          
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
                with friends and family.
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
            
            <img
              src={window.earmark}
              width="500"
              height="500"
            />
            
          </div>

        </main>
        <Footer />
      </div>

    )
  }
}

export default Splash;