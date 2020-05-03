import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { fetchPayments, createPayment, deletePayment } from "./actions/payment_actions";
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
  
  window.fetchPayments = fetchPayments;
  window.createPayment = createPayment;
  window.deletePayment = deletePayment;
  //END OF TESTING
  
  ReactDOM.render(<Root store={store}/>, root);
})