import React from "react";
import { withRouter } from "react-router-dom";
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";

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
            <a href="https://www.linkedin.com/in/darrick-yong/">
              <FaLinkedin className="linkedin" />
            </a>

            <a href="https://github.com/darrickyong">
              <FaGithub className="github" />
            </a>
            
            <a href="https://angel.co/u/darrick-yong">
              <FaAngellist className="angel" />
            </a>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);