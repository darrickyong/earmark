import { connect } from "react-redux";
import Dashboard from "./dashboard";

const mapStateToProps = (state, ownProps) => ({
  friendships: Object.values(state.entities.friendships),
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)