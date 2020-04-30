import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expense_form";
import { removeErrors } from "../../actions/session_actions";
import { fetchExpense, updateExpense } from "../../actions/expense_actions";
import { closeModal } from "../../actions/modal_actions";

class UpdateExpenseForm extends React.Component {
  componentDidMount() {
    // debugger

  }

  render() {
    const { action, formType, expense, errors, closeModal } = this.props;
    if (!expense) return null;
    return ( 
      <ExpenseForm 
        action={action}
        errors={errors}
        formType={formType}
        expense={expense}
        removeErrors={removeErrors}
        closeModal={closeModal}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.errors.session,
    currentUser: state.entities.users[state.session.id],
    expense: { name: "updatetest", amount: 908, date: "" },
    formType: "Update Expense"
  })
}

const mapDispatchToProps = dispatch => ({
  action: expense => dispatch(updateExpense(expense)),
  fetchExpense: expenseId => dispatch(fetchExpense(expenseId)),
  removeErrors: () => dispatch(removeErrors()),
  closeModal: () => dispatch(closeModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateExpenseForm);