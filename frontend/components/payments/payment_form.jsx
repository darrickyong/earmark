import React from "react";

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.payment, { realAmount: this.props.payment.amount / 100 });
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    this.setState({ payee_id: this.props.friends[0].friendUserId })
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
    let revisedPayment = Object.assign({}, this.state, { amount: value })    
    this.props.createPayment(revisedPayment)
      .then(() => this.props.fetchFriendships())
      .then(() => this.props.closeModal());
  }

  renderErrors() {
    return (
      <ul
        className="payment-errors"
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
    const { friends } = this.props;
    return (
      <div className="payment-form">
        <h2 className="payment-form-header">
          Add a payment
          <div
            className="payment-form-close"
            onClick={this.props.closeModal}
          >X</div>
        </h2>

        <div className="payment-form-main">

          <div>
            <img
              src={window.paymentCategory}
              className="payment-form-category"
            />   
          </div>
          <div className="payment-form-friends">
            <div>
              You paid:
            </div>
            <div>
              <select 
                value={this.state.payee_id} 
                onChange={this.handleChange("payee_id")}
                className="payment-form-select"
              >
                {friends.map( friend => {
                  return (
                    <option key={friend.friendUserId} value={friend.friendUserId}>{friend.name}</option>
                  )
                })}
              </select>
            </div>
          </div>

          <div className="payment-form-data">
            <div className="payment-form-date">
              <input 
                type="date" 
                value={this.state.date}
                className="payment-form-date-input"
                onChange={this.handleChange("date")}
              />
            </div>
            
            <div className="payment-form-cost">
              <div className="payment-form-currency">$</div>
              <input 
                type="number" 
                placeholder="0.00"
                className="payment-form-amount"
                step="0.01"
                value={this.state.realAmount ? this.state.realAmount : ""} 
                onChange={this.handleChange("realAmount")}
              />
            </div>
          </div>
        </div>

        {this.renderErrors() ? this.renderErrors() : ""}

        <div className="payment-form-footer">
          <button
            className="payment-form-cancel"
            onClick={this.props.closeModal}
          >Cancel</button>

          <input 
            type="submit" 
            onClick={this.handleSubmit}
            className="payment-form-pay"
            value="Pay"
          />
        </div>

      </div>
    )
  }
}

export default PaymentForm;