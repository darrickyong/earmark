import React from "react";
import ExpenseIndexItemContainer from "./expense_index_item_container";

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
      <div>

        <div className="expense-index">
          {expenses.map( (expense) => {
            return (
              <ExpenseIndexItemContainer 
                key={expense.id}
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