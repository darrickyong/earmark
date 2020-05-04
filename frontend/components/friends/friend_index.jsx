import React from "react";
import FriendIndexItem from "./friend_index_item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

class FriendIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
      .then( () => this.props.fetchFriendships());
  }
  
  render() {
    const { friends, deleteFriendship } = this.props;
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
              <FriendIndexItem
                key={friend.id}
                friend={friend} 
                deleteFriendship={deleteFriendship}
              />
            )
          })}
        </div>

      </div>
    )
  }
}

export default FriendIndex;