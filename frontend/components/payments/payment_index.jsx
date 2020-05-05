import React from "react";
import PaymentIndexItem from "./payment_index_item";

class PaymentIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchUsers()
    .then(() => this.props.fetchPayments());
  }
  
  render() {
    const { payments, currentUser, deletePayment } = this.props;
    payments.sort((a, b) => (a.date > b.date) ? 1 : -1).reverse();

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
    return (
      <div>
        {payments.map( (payment, idx, orig) => {
          let divider;
          if (idx === 0 ||
            orig[idx - 1].date.slice(5, 7) !== payment.date.slice(5, 7) ||
            orig[idx - 1].date.slice(0, 4) !== payment.date.slice(0, 4)) {
            divider = (
              <div>
                {months[payment.date.slice(5, 7)]} {payment.date.slice(0, 4)}
              </div>
            )
          }

          return (
            <div key={payment.id}>

              {divider ? (
                <div className="payment-month-divider">
                  {divider}
                </div>
              ) : ""}
              <PaymentIndexItem
                key={payment.id}
                payment={payment}
                currentUser={currentUser}
                deletePayment={deletePayment} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default PaymentIndex;