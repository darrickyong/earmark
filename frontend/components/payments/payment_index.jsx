import React from "react";
import PaymentIndexItemContainer from "./payment_index_item_container";

class PaymentIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPayments();
  }
  
  render() {
    const { payments } = this.props;
    return (
      <div>
        {payments.map( payment => {
          return (
            <PaymentIndexItemContainer 
              key={payment.id}
              payment={payment} />
          )
        })}
      </div>
    )
  }
}

export default PaymentIndex;