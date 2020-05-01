import React from "react";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.expense, { realAmount: this.props.expense.amount / 100 });
  
    // this.state.amount = this.state.amount / 100;
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
    let value = Number(this.state.realAmount).toFixed(2) * 100;
    let revisedExpense = Object.assign({}, this.state, { amount: value })
    this.props.action(revisedExpense)
      .then(this.props.closeModal)
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
  
    const { name, realAmount, date } = this.state;
    
    return (
      <div className="expense-form">
        <h2 className="expense-form-header">
          {this.props.formType}
          <div 
            className="expense-form-close"
            onClick={this.props.closeModal}
          >X</div>
        </h2>

        {this.renderErrors() ? this.renderErrors() : ""}

        <div className="expense-form-body">
          
          <div className="expense-form-main">
            
            <div>
              <input 
                type="text"
                className="expense-form-name" 
                placeholder="Enter expense name" 
                value={name}
                onChange={this.handleChange("name")}
              />
            </div>

            <div className="expense-form-cost-container">
              <span className="expense-form-currency">$</span>
              <input 
                type="number" 
                className="expense-form-amount" 
                placeholder="0.00"
                step=".01" 
                value={realAmount}
                onChange={this.handleChange("realAmount")}
              />
            </div>
          </div>

          <div
            className="expense-form-date" 
          >
            <input 
              type="date"
              className="expense-form-date" 
              value={date}
              onChange={this.handleChange("date")}
            />
          </div>
        </div>

        <div className="expense-form-footer">
          <button
            className="expense-form-cancel"
            onClick={this.props.closeModal}
          >Cancel</button>
          <button 
            onClick={this.handleSubmit}
            className="expense-form-save"
          >Save</button>

        </div>
      </div>
    )
  }
  
}

export default ExpenseForm;

//custom in model