import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./expense_form";
import { removeErrors } from "../../actions/session_actions";
import { fetchExpense, updateExpense } from "../../actions/expense_actions";
import { closeModal } from "../../actions/modal_actions";

class UpdateExpenseForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { action, friends, formType, expense, errors, closeModal } = this.props;
    if (!expense) return null;
    return ( 
      <ExpenseForm 
        action={action}
        errors={errors}
        formType={formType}
        expense={expense}
        removeErrors={removeErrors}
        closeModal={closeModal}
        friends={friends}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expense = state.entities.expenses[Object.values(state.ui.modal)[0]];
  return ({
    errors: state.errors.session,
    friends: Object.values(state.entities.friendships),
    currentUser: state.entities.users[state.session.id],
    expense,
    formType: "Update expense"
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