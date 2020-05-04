import { connect } from "react-redux";
import ExpenseIndex from "./expense_index";
import { fetchExpenses } from "../../actions/expense_actions";

const mapStateToProps = (state, ownProps) => ({
  expenses: Object.values(state.entities.expenses)
})

const mapDispatchToProps = dispatch => ({
  fetchExpenses: expenses => dispatch(fetchExpenses(expenses)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseIndex);