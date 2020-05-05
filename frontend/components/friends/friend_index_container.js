import { connect } from "react-redux";
import { fetchFriendships, deleteFriendship } from "../../actions/friendship_actions";
import { openModal } from "../../actions/modal_actions";
import FriendIndex from "./friend_index";

const mapStateToProps = (state, ownProps) => ({
  friendships: Object.values(state.entities.friendships),
  currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
  deleteFriendship: friendId => dispatch(deleteFriendship(friendId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendIndex);