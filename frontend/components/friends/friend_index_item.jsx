import React from "react";

class FriendIndexItem extends React.Component {
  render() {
    const { friend } = this.props;
    return (
      <div>
        {friend.name}
      </div>
    )
  }
}

export default FriendIndexItem;