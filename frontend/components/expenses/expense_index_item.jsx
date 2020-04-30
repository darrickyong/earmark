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
    const { expense, updateExpense } = this.props;
    return (
      <div>
        <div onClick={this.handleShow}>
          {expense.date}
          {expense.name}
          {expense.amount}

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
