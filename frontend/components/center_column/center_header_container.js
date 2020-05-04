import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import CenterHeader from "./center_header";

const mapStateToProps = (state, ownProps) => ({

})

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CenterHeader)