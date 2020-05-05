import React from "react";
import FriendshipIndexItem from "./friend_index_item";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

class FriendIndex extends React.Component {
  componentDidMount() {
    this.props.fetchFriendships();
  }
  
  render() {
    const { friendships, currentUser, deleteFriendship } = this.props;
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
          {friendships.map( friendship => {
            

            return (
              <FriendshipIndexItem
                key={friendship.id}
                friendship={friendship} 
                currentUser={currentUser}
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