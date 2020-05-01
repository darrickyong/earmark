import React from "react";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense;
    this.state.amount = this.state.amount / 100;
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillUnmount() {
    this.props.removeErrors();
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
    this.props.action(revisedExpense)
      .then( () => this.props.closeModal())
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => {
          return (
            <li
              className="errors"
              key={idx}>
              {error}
            </li>
          )
        })}
      </ul>
    )
  }
  
  render() {
    const { name, amount, date } = this.state;
    return (
      <div className="expense-form">
        <form onSubmit={this.handleSubmit}>
          <h2 className="expense-form-header">
            {this.props.formType}
          </h2>

          {this.renderErrors() ? this.renderErrors() : ""}

          <div className="expense-form-body">
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
          </div>

          <button>{this.props.formType}</button>
        </form>
      </div>
    )
  }
  
}

export default ExpenseForm;

//custom in model