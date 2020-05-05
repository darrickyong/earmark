import React from "react";

class ExpenseShow extends React.Component {
  componentDidMount() {
    // debugger
  }
  
  render() {
    const { expense } = this.props;
    return (
      <div className="expense-show">
        {(expense.amount / 100).toFixed(2)}
        <button
          className="expense-update-button"
          onClick={() => this.props.openModal({ "update": expense.id })}
        >
          Update expense
        </button>
      </div>
    )
  }
}

export default ExpenseShow;