import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMinus } from '@fortawesome/free-solid-svg-icons';


class FriendIndexItem extends React.Component {
  
  render() {
    const { friend, deleteFriendship } = this.props;
    return (
      <div className="friend-list-item">
        <div className="friend-list-name">
          <div className="friend-list-user">
            <FontAwesomeIcon icon={faUser} />
          </div>
          {friend.name}
        </div>
        <div 
          onClick={() => deleteFriendship(friend.friendship_id)}
          className="friend-list-delete"
        >
          <FontAwesomeIcon icon={faUserMinus} />
        </div>
      </div>
    )
  }
}

export default FriendIndexItem;