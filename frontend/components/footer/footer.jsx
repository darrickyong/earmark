import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-made">
              Made with 💰 in San Francisco, CA, USA
            </div>
            <div className="footer-copyright">
              Copyright © 2020 Earmark, Inc. All rights reserved.
            </div>
          </div>

          <div className="footer-links">
              <a 
                href="https://www.linkedin.com/in/darrick-yong/"
                className="footer-linkedin"
              >LinkedIn</a>

              <a
                href="https://github.com/darrickyong"
                className="footer-github"
              >GitHub</a>

          </div>
        </div>
      </div>
    )
  }
}

export default Footer;