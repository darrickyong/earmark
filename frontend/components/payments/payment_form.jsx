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

  handleChange(field) {
    return (e) => {
      debugger
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let value = Number(this.state.realAmount).toFixed(2) * 100;
    let revisedPayment = Object.assign({}, this.state, { amount: value })    
    this.props.createPayment(revisedPayment)
      .then(this.props.closeModal);
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        <h2 className="payment-form-header">
          Add a payment
          <div
            className="payment-form-close"
            onClick={this.props.closeModal}
          >X</div>
        </h2>
        <input 
          type="number" 
          placeholder="Enter an amount to pay your friend"
          step="0.01"
          value={this.state.realAmount} 
          onChange={this.handleChange("realAmount")}
        />
        <input type="date" value={this.state.date} onChange={this.handleChange("date")}/>
        <select value={this.state.payee_id} onChange={this.handleChange("payee_id")}>
          {friends.map( friend => {
            return (
              <option key={friend.friendUserId} value={friend.friendUserId}>{friend.name}</option>
            )
          })}
        </select>
        <input 
          type="submit" 
          onClick={this.handleSubmit}
          value="Pay"
        />

      </div>
    )
  }
}

export default PaymentForm;