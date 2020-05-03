import { connect } from "react-redux";
import FriendForm from "./friend_form";
import { createFriendship } from "../../actions/friendship_actions";
import { removeErrors } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
  createFriendship: friendship => dispatch(createFriendship(friendship)),
  removeErrors: () => dispatch(removeErrors()),
  closeModal: () => dispatch(closeModal())

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendForm)