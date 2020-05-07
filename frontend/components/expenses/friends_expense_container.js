import React from "react";
import { connect } from "react-redux";
import ExpenseIndex from "../expenses/expense_index";
import { selectFriendExpenses } from "../../reducers/selectors";
import { fetchExpenses } from "../../actions/expense_actions";
import { fetchFriendships } from "../../actions/friendship_actions";

class FriendExpenses extends React.Component {
  componentDidMount() {
    this.props.fetchFriendships();
  }
  
  render() {
    const { expenses, fetchExpenses } = this.props;
    return(
      <ExpenseIndex 
        expenses={expenses}
        fetchExpenses={fetchExpenses}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    expenses: selectFriendExpenses(state, ownProps.match.params.id),
  })
}

const mapDispatchToProps = dispatch => ({
  fetchExpenses: () => dispatch(fetchExpenses()),
  // fetchFriendships: () => dispatch(fetchFriendships())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseIndex)