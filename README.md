View the [live site](https://ear-mark.herokuapp.com/#/ "Earmark")

# Earmark
![](https://github.com/darrickyong/earmark/blob/master/docs/readme/splash.png)

Earmark is an expense-sharing app inspired by [Splitwise](http://splitwise.com/). It is built using the below technologies:

+ **Backend**: Ruby on Rails with a PostgreSQL database
+ **Frontend**: React with Redux

# Features
### Current Features
+ Expense creation
+ Viewing expenses
+ Recording cash payments
+ User authenticaiton

### Planned Features
+ Splitting expense into custom amounts
+ Creating comments on expenses/payments

---
## Dashboard
![](https://github.com/darrickyong/earmark/blob/master/docs/readme/dashboard.png)

Your dashboard will be your landing page upon signing in. It will provide a summary of your balances. Clicking on a specifc friend will show all expenses between you and that friend. For your convenience, your total balance amongst all friends will show in the right sidebar at all times while navigating the app.

---
## Expenses
### Creating
![](https://github.com/darrickyong/earmark/blob/master/docs/readme/expense_form.png)

To create an expense, click the orange "Add an expense" button that appears on every page. The expense form has required fields for name, amount, and the date the expense occured. Additionally, it has a list of your current friends that you can split the expense with. Select one or as many as you would like and, upon saving, the expense will be split evenly with everyone selected (don't forget you are also in that pool!).

The underlying "splits" are automatically created when an expense is created depending on the amount of friends selected. This was acheived through local state.

```
handleSelect(e) {
  const options = e.target.options;
  const split = [];
  for(let i = 0; i < options.length; i++) {
    if (options[i].selected) {
      split.push(options[i].value);
    }
  }
  this.setState({ split });
}
```
---
### Viewing
![](https://github.com/darrickyong/earmark/blob/master/docs/readme/expenses_view.png)

The "All Expenses" page will list all expenses you have created and any expenses that have been split with you in chronological order.

If an expense was created by you, it will list how much you spent, along with how much you can expect to get back from your friends. If the expense was split with you, it will list how much the creator spent and how much you owe them for the expense. Clicking on an expense will reveal additional details that list the individuals the expense was split with.

---
### Friends View
![](https://github.com/darrickyong/earmark/blob/master/docs/readme/friend.png)

Additionally, you can further filter expenses by friend by clicking on their name on the left. This view can also be reached by clicking on a friend from the Dashboard.

---
## Payments

### Creating
![](https://github.com/darrickyong/earmark/blob/master/docs/readme/payment_form.png)

To record a cash payment, click on the green "Settle up" button that appears on every page. Record the name of the friend you paid, and on which date.

---
### Viewing
![](https://github.com/darrickyong/earmark/blob/master/docs/readme/payments.png)

The "Payments" page wlil list all payments between you and your friends in chronological order.

If the payment was made by you, the amount will show in orange. If the payment was made to you, the amount will show in green. Clicking on an expense will reveal additional details.
 
--- 
## User Authentication
![](https://github.com/darrickyong/earmark/blob/master/docs/readme/login.png)

Functionality on Earmark is highly restricted for users that have not logged in. User authentication was designed using the [BCrypt](https://rubygems.org/gems/bcrypt) gem.