import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMinus } from '@fortawesome/free-solid-svg-icons';


class FriendshipIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { friendship, deleteFriendship } = this.props;
    return (
      <div className="friend-list-item">
        <div className="friend-list-name">
          <div className="friend-list-user">
            <FontAwesomeIcon icon={faUser} />
          </div>
          {friendship.name}
        </div>
        <div 
          onClick={() => deleteFriendship(friendship.id)}
          className="friend-list-delete"
        >
          <FontAwesomeIcon icon={faUserMinus} />
        </div>
      </div>
    )
  }
}

export default FriendshipIndexItem;