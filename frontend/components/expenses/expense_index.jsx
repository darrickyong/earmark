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
    expenses.sort((a, b) => (a.date > b.date) ? 1 : -1).reverse();

    const months = {
      "01": "January",
      "02": "Feburary",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December"
    }

    return(
      <div>

        <div className="expense-index">
          
          {expenses.map( (expense, idx, orig) => {
            let divider;
            if (idx === 0 || orig[idx-1].date.slice(5,7) !== expense.date.slice(5,7)) {
              divider = (
                <div>
                  {months[expense.date.slice(5,7)]} {expense.date.slice(0,4)}
                </div>
              )
            }

            return (
              <div key={expense.id}>

                {divider ? (
                  <div className="expense-month-divider">
                    {divider}
                  </div>
                ) : ""}
  
                <ExpenseIndexItemContainer 
                  expense={expense}
                />

              </div>
            )
          })}
        </div>

      </div>
    )
  }
}

export default ExpenseIndex;