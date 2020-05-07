import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserMinus } from '@fortawesome/free-solid-svg-icons';


class FriendshipIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleFriend = this.handleFriend.bind(this);
  }

  handleFriend(e) {
    if (e.target.dataset["icon"] === "user-minus") {
      debugger
      return;
    }
    this.props.history.push(`/friends/${this.props.friendship.id}`)
  }

  render() {
    const { friendship, deleteFriendship } = this.props;
    return (
      <div 
        onClick={this.handleFriend}
        className="friend-list-item">
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

export default withRouter(FriendshipIndexItem);