import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { fetchFriendships } from "../../actions/friendship_actions";

const mapStateToProps = (state, ownProps) => ({
  friendships: Object.values(state.entities.friendships),
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)