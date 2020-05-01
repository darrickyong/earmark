import React from "react";

class ExpenseShow extends React.Component {
  render() {
    const { expense } = this.props;
    return (
      <div>
        <button
          className="update-expense-button"
          onClick={() => this.props.openModal({ "update": expense.id })}
        >
          Update expense
        </button>
        {(expense.amount / 100).toFixed(2)}
      </div>
    )
  }
}

export default ExpenseShow;