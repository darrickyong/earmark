import { connect } from "react-redux";
import ExpenseIndex from "./expense_index";
import { fetchExpenses, updateExpense, deleteExpense } from "../../actions/expense_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  expenses: Object.values(state.entities.expenses)
})

const mapDispatchToProps = dispatch => ({
  fetchExpenses: expenses => dispatch(fetchExpenses(expenses)),
  updateExpense: expense => dispatch(updateExpense(expense)),
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseIndex);