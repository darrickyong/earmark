import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMinus } from '@fortawesome/free-solid-svg-icons';


class FriendIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(friendshipId) {
    this.props.deleteFriendship(this.props.friend.friendship_id)
      .then( () => this.props.fetchUsers())
    // add a .then
  }

  render() {
    const { friend } = this.props;
    return (
      <div className="friend-list-item">
        <div className="friend-list-name">
          <div className="friend-list-user">
            <FontAwesomeIcon icon={faUser} />
          </div>
          {friend.name}
        </div>
        <div 
          onClick={this.handleDelete}
          className="friend-list-delete"
        >
          <FontAwesomeIcon icon={faUserMinus} />
        </div>
      </div>
    )
  }
}

export default FriendIndexItem;