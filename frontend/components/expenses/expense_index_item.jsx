import React from "react";
import ExpenseShowContainer from "./expense_show_container";

class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealShowItem: false
    }
    this.handleShow = this.handleShow.bind(this);
  }
  
  handleShow(e) {
    this.setState({ revealShowItem: !this.state.revealShowItem })
  }

  render() {
    const { expense, deleteExpense } = this.props;
    return (
      <div>

        <div 
          className="expense-index-item"
        >
          <div
            className="expense-summary" 
            onClick={this.handleShow}
          >
            {expense.id}
            {expense.date}
            {expense.name}
            {expense.amount}
          </div>

          <div
            className="expense-delete"
            onClick={() => deleteExpense(expense.id)}
          >
            X
          </div>

        </div>

        {this.state.revealShowItem ? (
          <ExpenseShowContainer expense={expense}/>
        ) : ""
        }

      </div>
    )
  }
}

export default ExpenseIndexItem;
