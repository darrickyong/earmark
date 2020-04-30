import React from "react";
import NavBarContainer from "../components/nav_bar/nav_bar_container";
import LeftSidebar from "../components/left_sidebar/left_sidebar";
import RightSidebar from "../components/right_sidebar/right_sidebar";
import ExpenseIndex from "../components/expenses/expense_index_container";
import ExpenseFormContainer from "./expenses/create_expense_form_container";


const App = () => (
  <div>
    <NavBarContainer />
    <div className="main-component">
      <LeftSidebar />
      <ExpenseIndex />
      <RightSidebar />
    </div>
  </div>
)

export default App;