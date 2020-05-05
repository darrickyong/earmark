import { connect } from "react-redux";
import ExpenseShow from "./expense_show";
import { selectTransactions } from "../../reducers/selectors";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return( {
    transactions: selectTransactions(state, ownProps.expense),
  })
}

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseShow)