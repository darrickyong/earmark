# Front End Routes
Our components are organized as follows:

+ `Root`
  + `/signup`
    + `SessionForm`
  + `/login`
    + `SessionForm`
  + `App`
    + `NavBar`
    + (main component goes here)

---
The following routes, defined in App, will render components under `NavBar`.

+ `/`
  + `LeftSideBar`
  + (below components)
  + `RightSideBar`
+ `/dashboard`
  + `DashboardIndex`
    + `DashboardIndexItem`
+ `/transactions`
  + `TranactionIndex`
    + `TransactionIndexItem`
+ `/expenses`
  + `ExpenseIndex`
    + `ExpenseIndexItem`
+ `/friends/:id`
  + `FriendShow`
    + `FriendShowItem` 

