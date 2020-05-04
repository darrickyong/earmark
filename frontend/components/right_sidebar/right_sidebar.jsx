import React from "react";
import { Link } from "react-router-dom";

class RightSidebar extends React.Component {
  render() {
    return (
      <div className="right-sidebar">
        <div className="right-sidebar-container">
          <h2 className="right-sidebar-total">
            Your total balance
          </h2>

          <div className="right-sidebar-summary">
            you are owed
            <br/>
            <span>
              $123.45
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default RightSidebar;