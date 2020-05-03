import React from "react";
import FriendIndexItemContainer from "./friend_index_item_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

class FriendIndex extends React.Component {
  componentDidMount() {
    this.props.fetchFriendships();
  }
  
  render() {
    const { friends } = this.props;
    return (
      <div className="friend-list">
        <div className="friend-index-header">
          <div className="friends">
            Friends
          </div>
          <div 
            onClick={() => this.props.openModal({ "friend": -1 })}
            className="friend-add">
            <div className="friend-plus">
              <FontAwesomeIcon icon={faUserPlus} />
            </div>
            <div>
              add
            </div>
          </div>
        </div>
        <div>
          {friends.map( friend => {
            return (
              <FriendIndexItemContainer 
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