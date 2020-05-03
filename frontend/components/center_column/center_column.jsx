import React from "react";
import CenterHeaderContainer from "../center_column/center_header_container";
import ExpenseIndexContainer from "../expenses/expense_index_container";
import PaymentIndexContainer from "../payments/payment_index_container";
import DashboardContainer from "../dashboard/dashboard_container";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class CenterColumn extends React.Component {
  render() {
    return(
      <div className="center-column">

        <div>
          <CenterHeaderContainer />
        </div>

        <div>
          <Switch>
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route exact path="/expenses" component={ExpenseIndexContainer} />
            <Route exact path="/payments" component={PaymentIndexContainer} />
          </Switch>
        </div>

      </div>
    )
  }
}

export default CenterColumn;