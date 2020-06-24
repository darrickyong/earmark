import { connect } from "react-redux";
import ExpenseIndexItem from "./expense_index_item";
import { deleteExpense } from "../../actions/expense_actions";
import { selectTransactions } from "../../reducers/selectors";
import { fetchFriendships } from "../../actions/friendship_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  return ({
    currentUser: state.entities.users[state.session.id],
    transactions: selectTransactions(state, ownProps.expense),
  })
};

const mapDispatchToProps = dispatch => ({
  fetchFriendships: () => dispatch(fetchFriendships()),
  deleteExpense: expenseId => dispatch(deleteExpense(expenseId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseIndexItem);