import React from "react";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, 
      this.props.expense, 
      { realAmount: this.props.expense.amount / 100 }
    );
  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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
      let revisedExpense = Object.assign({}, this.state, { amount: value });
      if (revisedExpense.split === this.props.expense.split) {
        revisedExpense.split = Object.keys(revisedExpense.split);
      }
  
      this.props.action(revisedExpense)
        .then(() => this.props.fetchFriendships())
        .then(() => this.props.closeModal())
  }

  handleSelect(e) {
    const options = e.target.options;
    const split = [];
    for(let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        split.push(options[i].value);
      }
    }
    this.setState({ split });
  }

  renderErrors() {
    return (
      <ul
        className="expense-errors"
      >
        {this.props.errors.map((error, idx) => {
          return (
            <li
              key={idx}>
              {error}
            </li>
          )
        })}
      </ul>
    )
  }
  
  render() {
    const { name, realAmount, date, split } = this.state;
    const { friends } = this.props;

    return (
      <div className="expense-form">
        <h2 className="expense-form-header">
          {this.props.formType}
          <div 
            className="expense-form-close"
            onClick={this.props.closeModal}
          >X</div>
        </h2>


        <div className="expense-form-body">
          
          <div className="expense-form-main">
            <div>
              <img 
                src={window.earmarkCategory}
                className="expense-form-category"
              />
            </div>

            <div className="expense-form-desc">
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
                  value={realAmount ? realAmount : ""}
                  onChange={this.handleChange("realAmount")}
                />
              </div>
            </div>
          </div>

          <div className="expense-form-others">
            <div className="expense-form-left">
              <div>
                Select <u>at least one friend</u> to split this bill <strong>equally</strong> with:
              </div>
              <select
                multiple 
                defaultValue={Object.keys(split)} 
                className="expense-form-select"
                onChange={this.handleSelect}
              >
                {friends.map( friendship => {
                  return (
                    <option
                      key={friendship.id} 
                      value={friendship.friendUserId}
                    >{friendship.name}</option>
                  )
                })}
              </select>
            </div>
            
            <div className="expense-form-right">
              <input 
                type="date"
                className="expense-form-date" 
                value={date}
                onChange={this.handleChange("date")}
              />

              {/* <textarea
                className="expense-form-comment" 
                placeholder="Comment features coming soon..."
              /> */}
            </div>

          </div>
            
        </div>

        {this.renderErrors() ? this.renderErrors() : ""}

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