import React from "react";

class ExpenseShow extends React.Component {
  componentDidMount() {
    // debugger
  }
  
  render() {
    const { expense, transactions } = this.props;
    return (
      <div className="expense-show">
        <table>
          <tbody>
            <tr>
              <td>
                {expense.name}
                {(expense.amount / 100).toFixed(2)}

                <button
                  className="expense-update-button"
                  onClick={() => this.props.openModal({ "update": expense.id })}
                >
                  Update expense
                </button>
              </td>
            </tr>

            <tr>
              <td>
                <div>
                  {`${expense.owner.split(" ")[0]} paid $${(expense.amount/100).toFixed(2)}`}
                </div>

                {transactions.map( transaction => {
                  return (
                    <div key={transaction.id}>
                      {`${transaction.payer.split(" ")[0]} owes $${(transaction.amount / 100).toFixed(2)}`}
                    </div>
                  )
                })}
              </td>
            </tr>

          </tbody>
        </table>

      </div>
    )
  }
}

export default ExpenseShow;