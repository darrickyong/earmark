import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

class PaymentShow extends React.Component {
  render() {
    const { payment } = this.props;
    return(
      <div className="payment-show">

        <div className="payment-show-header">
          <img className="payment-show-img" src={window.paymentCategory} />

          <div className="payment-show-header-main">
            <h2>
              Payment
            </h2>
            <div className="payment-show-amount">
              ${(payment.amount / 100).toFixed(2)}
            </div>
            <button
              className="payment-update-button"
              // onClick={() => this.props.openModal({ "update": expense.id })}
            >Update payment</button>
          </div>
        </div>

        <div className="payment-show-main">
          <div className="payment-show-left">
            <div className="payment-show-owner">
              <FontAwesomeIcon
                className="payment-show-owner-img"
                icon={faGem} />
              {`${payment.payer.split(" ")[0]} paid $${(payment.amount / 100).toFixed(2)}`}
            </div>


            <div className="payment-show-payer">
              <FontAwesomeIcon
                className="payment-show-payer-img"
                icon={faGem} />

              {`${payment.payee.split(" ")[0]} received $${(payment.amount / 100).toFixed(2)}`}
            </div>

          </div>
          <div className="payment-show-right">
            <textarea
              className="payment-show-comment"
              placeholder="Comment features coming soon..." />
            <button
              className="payment-show-post"
            >Post</button>
          </div>
        </div>


      </div>
    )
  }
}

export default PaymentShow;