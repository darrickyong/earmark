import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { fetchFriendships } from "../../actions/friendship_actions";
import CenterHeader from "./center_header";


const mapStateToProps = (state, ownProps) => {
  return({
    friendship: state.entities.friendships[ownProps.match.params.id],
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchFriendships: () => dispatch(fetchFriendships()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterHeader)