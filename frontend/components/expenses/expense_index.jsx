import React from "react";
import ExpenseIndexItem from "./expense_index_item";

class ExpenseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchExpenses();
  }
  
  render() {
    const { expenses, updateExpense } = this.props;
    return(
      <div className="center-column">
        <div className="expense-index">
          Expense Index
          {expenses.map( (expense, idx) => {
            return (
              <ExpenseIndexItem 
                key={idx}
                expense={expense}
                updateExpense={updateExpense}
              />
            )
          })}
        </div>

      </div>
    )
  }
}

export default ExpenseIndex;