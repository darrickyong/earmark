import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiggyBank, faDollarSign, faListUl } from '@fortawesome/free-solid-svg-icons';
import FriendIndexContainer from "../friends/friend_index_container";

class LeftSidebar extends React.Component {
  render() {
    return (
      <div className="left-sidebar">
        <div className="left-sidebar-container">
          <div className="left-sidebar-main">
            <div className="left-dashboard">
              <Link to="/dashboard" className="left-link">
                <FontAwesomeIcon icon={faPiggyBank} className="left-pig"/>
                Dashboard
              </Link>
            </div>
            
            <div className="left-payment">
              <Link to="/payments" className="left-link">
                <FontAwesomeIcon icon={faDollarSign} className="left-dollar" />
                Payments</Link>
            </div>

            <div className="left-expense">
              <Link to="/expenses" className="left-link">
                <FontAwesomeIcon icon={faListUl} className="left-ul" />
                All expenses
              </Link>
            </div>
          </div>

          <FriendIndexContainer />
        </div>
      </div>
    )
  }
}

export default LeftSidebar;