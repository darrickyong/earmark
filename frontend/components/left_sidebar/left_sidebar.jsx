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

              <Link to="/dashboard" className="left-dashboard">
                <FontAwesomeIcon icon={faPiggyBank} className="left-pig"/>
                Dashboard
              </Link>

              <Link to="/payments" className="left-payment">
                <FontAwesomeIcon icon={faDollarSign} className="left-dollar" />
                Payments</Link>

              <Link to="/expenses" className="left-expense">
                <FontAwesomeIcon icon={faListUl} className="left-ul" />
                All expenses
              </Link>

          </div>

          <FriendIndexContainer />
        </div>
      </div>
    )
  }
}

export default LeftSidebar;