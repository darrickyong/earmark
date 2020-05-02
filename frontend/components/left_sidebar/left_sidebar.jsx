import React from "react";
import { Link } from "react-router-dom";
import FriendIndexContainer from "../friends/friend_index_container";

class LeftSidebar extends React.Component {
  render() {
    return (
      <div className="left-sidebar">
        <div className="left-sidebar-container">
          Left Sidebar
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/payments">Payments</Link>
          <Link to="/expenses">All expenses</Link>
          <FriendIndexContainer />
        </div>
      </div>
    )
  }
}

export default LeftSidebar;