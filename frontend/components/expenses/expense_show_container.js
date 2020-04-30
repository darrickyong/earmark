import { connect } from "react-redux";
import ExpenseShow from "./expense_show";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseShow)