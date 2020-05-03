import { connect } from "react-redux";
import { fetchFriendships } from "../../actions/friendship_actions";
import { openModal } from "../../actions/modal_actions";

import FriendIndex from "./friend_index";

const mapStateToProps = (state, ownProps) => ({
  friends: Object.values(state.entities.friendships)
})

const mapDispatchToProps = dispatch => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendIndex);