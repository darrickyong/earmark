sampleState = {
  entities: {
    users: {
      1: {
        id: 1,
        username: "darrickyong",
        email: "darrickyong@gmail.com"
      },
      2: {
        id: 2,
        username: "appacademy",
        email: "appacademy@gmail.com"
      },
      3: {
        id: 3,
        username: "jennvomo",
        email: "jennvomo@gmail.com"
      }
    },
    groups: {
      1: {
        id: 1,
        name: "Friday Night Dinner",
        description: "dinners on Fridays",
        owner_id: 1
      },
      2: {
        id: 2,
        name: "Tuesday Take-out",
        description: "",
        owner_id: 2
      }
    },
    expenses: {
      1: {
        id: 1,
        name: "lunch",
        amount: 3200,
        owner_id: 2,
        date: 04/20/2020
      },
      2: {
        id: 2,
        name: "groceries",
        amount: 1400,
        owner_id: 3,
        date: 02/10/2020
      }
    },
    transactions: {
      1: {
        id: 1,
        amount: 1600,
        payer_id: 2,
        expense_id: 1,
        date: 04/20/2020
      },
      2: {
        id: 2,
        amount: 1600,
        payer_id: 1,
        expense_id: 1,
        date: 04/22/2020
      },
      3: {
        id: 3,
        amount: 700,
        payer_id: 3,
        expense_id: 2,
        date: 02/10/2020
      },
      4: {
        id: 4,
        amount: 700,
        payer_id: 2,
        expense_id: 2,
        date: 02/11/2020
      }
    },
    comments: {
      1: {
        id: 1,
        title: "",
        body: "Thanks for dinner!",
        author_id: 2,
        commentable_type: "Expense",
        commentable_id: 1
      },
      2: {
        id: 2,
        title: "Groceries",
        body: "Thanks for getting groceries during COVID-19",
        author_id: 2,
        commentable_type: "Transaction",
        commentable_id: 4
      }
    },
    friendships: {
      1: {
        id: 1,
        user_id: 1,
        friend_id: 2
      },
      2: {
        id: 2,
        user_id: 1,
        friend_id: 3
      },
      3:{
        id: 3,
        user_id: 2,
        friend_id: 3
      }
    },
    members: {
      1: {
        id: 1,
        user_id: 1,
        group_id: 1
      },
      2: {
        id: 2,
        user_id: 2,
        group_id: 1
      },
      3: {
        id: 3,
        user_id: 3,
        group_id: 1
      },
      4: {
        id: 4,
        user_id: 2,
        group_id: 2
      },
      5: {
        id: 5,
        user_id: 3,
        group_id: 2
      }
    }  
  },
  ui: {
    loading: true/false,
    darkMode: true/false
  },
  errors: {
    login: ["Incorrect username or password"],
    expense: ["Amount must not be blank", "Date must be selected"]
  },
  session: { currentUserId: 2 }
}