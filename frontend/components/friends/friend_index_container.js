import { connect } from "react-redux";
import { fetchFriendships, createFriendship, deleteFriendship } from "../../actions/friendship_actions";
import FriendIndex from "./friend_index";

const mapStateToProps = (state, ownProps) => ({
  friends: Object.values(state.entities.friendships)
})

const mapDispatchToProps = dispatch => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
  createFriendship: friendship => dispatch(createFriendship(friendship)),
  deleteFriendship: friendId => dispatch(deleteFriendship(friendId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendIndex);