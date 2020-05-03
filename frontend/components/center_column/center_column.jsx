import React from "react";
import CenterHeaderContainer from "../center_column/center_header_container";
import ExpenseIndexContainer from "../expenses/expense_index_container";

class CenterColumn extends React.Component {
  render() {
    return(
      <div className="center-column">

        <div>
          <CenterHeaderContainer />
        </div>
        <div>
          <ExpenseIndexContainer />
        </div>
      </div>
    )
  }
}

export default CenterColumn;