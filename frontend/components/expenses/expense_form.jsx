import React from "react";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let value = Number(this.state.amount).toFixed(2) * 100;
    let revisedExpense = Object.assign({}, this.state, { amount: value })
    this.props.createExpense(revisedExpense);
  }

  render() {
    const { name, amount, date } = this.props;
    return (
      <div className="expense-form">
        <form onSubmit={this.handleSubmit}>
          <h2>Add a bill</h2>
          <input 
            type="text" 
            placeholder="Enter expense name" 
            value={name}
            onChange={this.handleChange("name")}
          />
          <input 
            type="number" 
            placeholder="0.00"
            step=".01" 
            value={amount}
            onChange={this.handleChange("amount")}
          />
          <input 
            type="date" 
            value={date}
            onChange={this.handleChange("date")}
          />
          <button>Save</button>
        </form>
      </div>
    )
  }
  
}

export default ExpenseForm;

//custom in model