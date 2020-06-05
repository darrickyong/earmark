import React from "react";
import Footer from "../footer/footer";

class Splash extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {

    return (
      <div>
        <header className="splash-header">
          <div className="splash-header-container">
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

          </div>
          
        </header>


        <main className="splash-main">
          <div className="splash-main-container">
            <div className="splash-main-left">
              <h1 className="splash-left-header">
                <p className="splash-left-p">
                  Less stress when sharing expenses 
                </p>
                <div className="splash-left-div">
                  with friends and family.
                </div>
              </h1>

              <div className="splash-left-body">
                <p>
                  Keep track of your shared expenses and balances with 
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

          </div>

        </main>
        <Footer />
      </div>

    )
  }
}

export default Splash;