import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import { fetchFriendships, createFriendship, deleteFriendship } from "./actions/friendship_actions";
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
  
  window.fetchFriendships = fetchFriendships;
  window.createFriendship = createFriendship;
  window.deleteFriendship = deleteFriendship;
  //END OF TESTING
  
  ReactDOM.render(<Root store={store}/>, root);
})