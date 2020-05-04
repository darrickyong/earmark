import React from "react";
import { withRouter } from "react-router-dom";

class CenterHeader extends React.Component {
  render() {
    let headerName;
    
    switch (this.props.location.pathname) {
      case "/payments":
        headerName = "Payments";
        break;
      case "/expenses":
        headerName = "All expenses";
        break;
      case "/dashboard":
        headerName = "Dashboard";
        break;
      default:
        break;
    }

    return (
      <div className="center-column-header">
        <div className="center-header">
          <h1 className="center-header-name">
            {headerName}
          </h1>
          <div className="expense-header-buttons">
            <button
              className="center-create-button"
              onClick={() => this.props.openModal({ "create": -1 })}
            >Add an expense</button>

            <button
              className="pay-button"
              onClick={() => this.props.openModal({ "createpayment": -1 })}
            >Settle Up</button>

          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CenterHeader);