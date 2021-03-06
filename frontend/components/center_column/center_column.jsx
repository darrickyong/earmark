import React from "react";
import CenterHeaderContainer from "../center_column/center_header_container";
import ExpenseIndexContainer from "../expenses/expense_index_container";
import PaymentIndexContainer from "../payments/payment_index_container";
import DashboardContainer from "../dashboard/dashboard_container";
import FriendsExpenseContainer from "../expenses/friends_expense_container";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class CenterColumn extends React.Component {
  render() {
    return(
      <div className="center-column">

        <div>
          <Switch>
            <Route exact path="/friends/:id" component={CenterHeaderContainer} />
            <Route component={CenterHeaderContainer} />
          </Switch>
        </div>

        <div>
          <Switch>
            <Route exact path="/dashboard" component={DashboardContainer} />
            <Route exact path="/expenses" component={ExpenseIndexContainer} />
            <Route exact path="/payments" component={PaymentIndexContainer} />
            <Route exact path="/friends/:id" component={FriendsExpenseContainer}/>
            <Route render={() => <Redirect to={{ pathname: "/" }} />} />
          </Switch>
        </div>

      </div>
    )
  }
}

export default CenterColumn;