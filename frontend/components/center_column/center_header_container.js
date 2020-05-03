import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import CenterHeader from "./center_header";

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(
  null,
  mapDispatchToProps
)(CenterHeader)