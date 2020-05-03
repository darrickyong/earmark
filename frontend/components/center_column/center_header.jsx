import React from "react";

class CenterHeader extends React.Component {
  render() {
    return (
      <div className="center-column-header">
        <div className="center-header">
          <h1 className="center-header-name">
            All expenses
          </h1>
          <div className="expense-header-buttons">
            <button
              className="center-create-button"
              onClick={() => this.props.openModal({ "create": -1 })}
            >Add an expense</button>

            <button
              className="pay-button"
            >Settle Up</button>

          </div>
        </div>
      </div>
    )
  }
}

export default CenterHeader;