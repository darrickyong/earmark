import { connect } from "react-redux";
import ExpenseForm from "./expense_form";
import { removeErrors } from "../../actions/session_actions";
import { createExpense } from "../../actions/expense_actions";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  currentUser: state.entities.users[state.session.id],
  expense: { name: "", amount: 0, date: "" },
  formType: "Create Expense"
})

const mapDispatchToProps = dispatch => ({
  createExpense: expense => dispatch(createExpense(expense)),
  removeErrors: () => dispatch(removeErrors()),
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseForm);