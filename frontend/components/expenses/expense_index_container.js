import { connect } from "react-redux";
import ExpenseIndex from "./expense_index";
import { fetchExpenses } from "../../actions/expense_actions";
import { fetchTransactions } from "../../actions/transaction_actions";

const mapStateToProps = (state, ownProps) => ({
  expenses: Object.values(state.entities.expenses)
})

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => dispatch(fetchExpenses()),
  fetchTransactions: () => dispatch(fetchTransactions()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseIndex);