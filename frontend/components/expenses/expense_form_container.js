import { connect } from "react-redux";
import ExpenseForm from "./expense_form";
import { createExpense } from "../../actions/expense_actions";

const mapStateToProps = (state, ownProps) => ({
  expense: { name: "", amount: 0, date: "" }
})

const mapDispatchToProps = dispatch => ({
  createExpense: expense => dispatch(createExpense(expense))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseForm);