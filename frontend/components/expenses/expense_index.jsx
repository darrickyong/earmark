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
          <h1 className="expense-header-name">
            All expenses
          </h1>
          <div className="expense-header-buttons">
            <button
              className="expense-create-button"
              onClick={() => this.props.openModal({"create": -1})}
            >Add an expense</button>

            <button
              className="pay-button"
            >Settle Up</button>

          </div>
        </div>
        
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