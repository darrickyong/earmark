import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { signup, login, logout } from "./actions/session_actions";
import { fetchExpenses, fetchExpense, createExpense, updateExpense, deleteExpense } from "./actions/expense_actions";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id ]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    }

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  
  window.fetchExpenses = fetchExpenses;
  window.fetchExpense = fetchExpense;
  window.createExpense = createExpense;
  window.updateExpense = updateExpense;
  window.deleteExpense = deleteExpense;
  //END OF TESTING
  
  ReactDOM.render(<Root store={store}/>, root);
})