import React from "react";

class PaymentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    const { currentUser, payment } = this.props;
    if (currentUser.id === payment.payer_id) {
      this.props.deletePayment(payment.id);
    } else {
      window.alert("You are not the creator of this payment.");
    }
  }

  render() {
    const months = {
      "01": "Jan",
      "02": "Feb",
      "03": "Mar",
      "04": "Apr",
      "05": "May",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      "10": "Oct",
      "11": "Nov",
      "12": "Dec"
    }
    const { payment, currentUser } = this.props;
    const month = months[payment.date.slice(5, 7)];
    const day = payment.date.slice(8, 10);
    const year = payment.date.slice(0, 4);
    if (!payment) return null;


    return (
      <div>
        <div className="payment-index-item">
          <div className="payment-summary">
            <div className="payment-index-main">

              <div className="payment-index-date">
                <div className="payment-index-month">
                  {month}
                </div>
                <div className="payment-index-day">
                  {day}
                </div>
              </div>

              <div>
                <img
                  src={window.paymentCategory}
                  className="payment-index-category"
                />                
              </div>

              <div className="payment-index-transfer">
                {`${payment.payer} paid ${payment.payee}`}
              </div>

            </div>

              <span className="payment-index-cost">
                  {payment.payee_id === currentUser.id ? 
                  ("you received") : (" you paid")}
              </span>



            <div className="payment-index-you">

              {payment.payee_id === currentUser.id ?
                (
                  <div className="payment-index-positive">
                    ${(payment.amount / 100).toFixed(2)}
                  </div>
                ) : 
                (
                  <div className="payment-index-negative">
                    ${(payment.amount / 100).toFixed(2)}
                  </div>
                )}

              <div
                className="payment-delete"
                onClick={this.handleDelete}
              >
                <div className="payment-x">x</div>
              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default PaymentIndexItem;