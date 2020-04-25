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
        username: "jenvomo",
        email: "jenvomo@gmail.com"
      }
    },
    groups: {
      1: {
        id: 1,
        name: "Friday Night Dinner",
        description: "dinners on Fridays",
        ownerId: 1
      },
      2: {
        id: 2,
        name: "Tuesday Take-out",
        description: "",
        ownerId: 2
      }
    },
    expenses: {
      1: {
        id: 1,
        name: "lunch",
        amount: 3200,
        ownerId: 2,
        date: 04/20/2020
      },
      2: {
        id: 2,
        name: "groceries",
        amount: 1400,
        ownerId: 3,
        date: 02/10/2020
      }
    },
    transactions: {
      1: {
        id: 1,
        amount: 1600,
        payerId: 1,
        expense_id: 1,
        date: 04/22/2020
      },
      2: {
        id: 2,
        amount: 700,
        payerId: 2,
        expense_id: 2,
        date: 02/11/2020
      }
    },
    payments: {
      1: {
        id: 1,
        amount: 200,
        payeeId: 2,
        payerId: 1,
        date: 04/25/2020
      },
      2: {
        id: 2,
        amount: 500,
        payeeId: 2,
        payerId: 1,
        date: 04/26/2020
      }
    },
    comments: {
      1: {
        id: 1,
        title: "",
        body: "Thanks for dinner!",
        authorId: 2,
        commentableType: "Expense",
        commentableId: 1
      },
      2: {
        id: 2,
        title: "Groceries",
        body: "Thanks for getting groceries during COVID-19",
        authorId: 2,
        commentableType: "Payment",
        commentableId: 4
      }
    },
    friendships: {
      1: {
        id: 1,
        userId: 1,
        friendId: 2
      },
      2: {
        id: 2,
        userId: 1,
        friendId: 3
      },
      3:{
        id: 3,
        userId: 2,
        friendId: 3
      }
    },
    members: {
      1: {
        id: 1,
        userId: 1,
        groupId: 1
      },
      2: {
        id: 2,
        userId: 2,
        groupId: 1
      },
      3: {
        id: 3,
        userId: 3,
        groupId: 1
      },
      4: {
        id: 4,
        userId: 2,
        groupId: 2
      },
      5: {
        id: 5,
        userId: 3,
        groupId: 2
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