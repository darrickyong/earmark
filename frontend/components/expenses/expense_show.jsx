import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faStreetView } from '@fortawesome/free-solid-svg-icons';

class ExpenseShow extends React.Component {
  
  render() {
    const { expense, transactions, revealShowItem } = this.props;
    // let showClasses = ['expense-show']
    // if (revealShowItem) {
    //   showClasses = ['expense-show', 'animate']
    // }

    return (
      <div className={`expense-show ${revealShowItem ? "animate-expense": ""}`}>
        <div className="expense-show-header">
          <img className="expense-show-img" src={window.earmarkCategory}/>
          
          <div className="expense-show-header-main">
            <h2>
              {expense.name}
            </h2>
            <div className="expense-show-amount">
              ${(expense.amount / 100).toFixed(2)}
            </div>
            <button
              className="expense-update-button"
              onClick={() => this.props.openModal({ "update": expense.id })}
            >Update expense</button>
          </div>
        </div>

        <div className="expense-show-main">
          <div className="expense-show-left">
            <div className="expense-show-owner">
              <FontAwesomeIcon 
                className="expense-show-owner-img"
                icon={faGem}/>
              {`${expense.owner.split(" ")[0]} paid $${(expense.amount/100).toFixed(2)}`}
            </div>

            {transactions.map( transaction => {
              return (
                <div key={transaction.id} className="expense-show-payer">
                  <FontAwesomeIcon 
                    className="expense-show-payer-img" 
                    icon={faStreetView}/>

                  {`${transaction.payer.split(" ")[0]} owes $${(transaction.amount / 100).toFixed(2)}`}
                </div>
              )
            })}
          </div>
          <div className="expense-show-right">
            {/* <textarea 
              className="expense-show-comment" 
              placeholder="Comment features coming soon..."/>
            <button
              className="expense-show-post"
            >Post</button>   */}
          </div>
        </div>


      </div>
    )
  }
}

export default ExpenseShow;