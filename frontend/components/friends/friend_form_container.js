import { connect } from "redux";
import FriendForm from "./friend_form";
import { createFriendship } from "../../actions/friendship_actions";

const mapDispatchToProps = dispatch => ({
  createFriendship = friendship => dispatch(createFriendship(friendship))
})

export default connect(
  null,
  mapDispatchToProps
)(FriendForm)