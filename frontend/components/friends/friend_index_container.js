import { connect } from "react-redux";
import { selectAllFriends } from "../../reducers/selectors";
import { fetchUsers } from "../../actions/session_actions";
import { fetchFriendships, deleteFriendship } from "../../actions/friendship_actions";
import { openModal } from "../../actions/modal_actions";
import FriendIndex from "./friend_index";

const mapStateToProps = (state, ownProps) => ({
  friends: selectAllFriends(state)
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchFriendships: () => dispatch(fetchFriendships()),
  deleteFriendship: friendId => dispatch(deleteFriendship(friendId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendIndex);