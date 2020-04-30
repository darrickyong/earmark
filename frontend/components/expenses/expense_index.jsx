import React from "react";
import ExpenseIndexItemContainer from "./expense_index_item_container";
import CreateExpenseFormContainer from "./create_expense_form_container"

class ExpenseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchExpenses();
  }

  render() {
    const { expenses } = this.props;
    return(
      <div className="center-column">
        <div className="expense-header"> 
          Expense Index Header
          <CreateExpenseFormContainer />
        </div>
        
        <div className="expense-index">
          Expense Index
          {expenses.map( (expense, idx) => {
            return (
              <ExpenseIndexItemContainer 
                key={idx}
                expense={expense}
              />
            )
          })}
        </div>

      </div>
    )
  }
}

export default ExpenseIndex;