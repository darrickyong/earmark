import React from "react";
import ExpenseShowContainer from "./expense_show_container";
import { CSSTransition } from "react-transition-group";

class ExpenseIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealShowItem: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleShow(e) {
    if (e.target.className === "expense-x") {
      return;
    }
    this.setState({ revealShowItem: !this.state.revealShowItem });
  }

  handleDelete(e) {
    const { currentUser, expense } = this.props;
    if (currentUser.id === expense.owner_id) {
      this.props.deleteExpense(expense.id);
    } else {
      window.alert("You are not the creator of this expense.");
    }
  }

  render() {
    const months = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      "10": "Oct",
      "11": "Nov",
      "12": "Dec"
    }
    const { expense, currentUser } = this.props;
    const month = months[expense.date.slice(5, 7)];
    const day = expense.date.slice(8, 10);
    const year = expense.date.slice(0, 4);

    return (
      <div>
        <div className="expense-index-item">
          <div
            className="expense-summary" 
            onClick={this.handleShow}
          >
            <div className="expense-index-main">

              <div className="expense-index-date">
                <div className="expense-index-month">
                  {month}
                </div>
                <div className="expense-index-day">
                  {day}
                </div>
              </div>
              
              <div>
                <img
                  src={window.earmarkCategory}
                  className="expense-index-category"
                />
              </div>

              <div className="expense-index-name">
                {expense.name}
              </div>

            </div>

            <div className="expense-index-cost">
              {expense.owner_id === currentUser.id ? (
                `you paid`
              ): `${expense.owner.split(" ")[0]} paid`}
              <br/>
              <span className="expense-index-amount">
                ${(expense.amount / 100).toFixed(2)}
              </span>
            </div>            
            
            <div className="expense-index-you">
              
              {/* <div className="expense-index-else">
                {expense.owner_id === currentUser.id ? (
                  `you lent`
                ) : (`${expense.owner.split(" ")[0]} lent you`)}
                <br/>
                <span className="expense-index-lent">
                  $1.00 place
                </span>
              </div> */}

              {(expense.owner_id === currentUser.id) ? (
                <div className="expense-index-else">
                  you lent
                  <br/>
                  <span className="expense-index-positive">
                    ${(expense.transAmt/100).toFixed(2)}
                </span>
                </div>
              ):(
                <div className="expense-index-else">
                  {expense.owner.split(" ")[0]} lent you
                  <br />
                  <span className="expense-index-negative">
                    ${((expense.amount - expense.transAmt) / 100).toFixed(2)}


                </span>
                  </div>
              )}    

              <div
                className="expense-delete"
                onClick={this.handleDelete}
              >
                <div className="expense-x">x</div>
              </div>

            </div>
          </div>


        </div>

{/* 
        <CSSTransition
          in={this.state.revealShowItem}
          timeout={350}
          classNames="testing"
          unmountOnExit
        > */}
          {this.state.revealShowItem ? (
            <ExpenseShowContainer expense={expense}/>
          ) : ""
          }
        {/* </CSSTransition> */}

      </div>
    )
  }
}

export default ExpenseIndexItem;
