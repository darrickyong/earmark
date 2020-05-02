import React from "react";
import FriendIndexItem from "./friend_index_item";

class FriendIndex extends React.Component {
  componentDidMount() {
    this.props.fetchFriendships();
  }
  
  render() {
    const { friends } = this.props;
    return (
      <div>
        <div className="friend-index-header">
          <div>
            Friends
          </div>
          <div>
            +
          </div>
        </div>
        <div>
          {friends.map( friend => {
            return (
              <FriendIndexItem 
                key={friend.id}
                friend={friend} 
              />
            )
          })}
        </div>

      </div>
    )
  }
}

export default FriendIndex;