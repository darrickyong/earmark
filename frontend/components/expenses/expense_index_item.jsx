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
            <div className="expense-index-main">
              <div>
                {expense.date}
              </div>
              <div>
                {expense.name}
              </div>
            </div>

            <div className="expense-index-cost">
              you paid
              <br/>
              <span className="expense-index-amount">
                ${(expense.amount / 100).toFixed(2)}
              </span>
            </div>            
            
            <div className="expense-index-you">
              
              <div className="expense-index-else">
                you lent
                <br/>
                <span className="expense-index-lent">
                  $1.00000
                </span>
              </div>

              <div
                className="expense-delete"
                onClick={() => deleteExpense(expense.id)}
              >x</div>

            </div>
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
