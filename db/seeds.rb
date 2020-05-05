# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(name: "DemoUser", password: "123456", email: "demo@earmark.com")
User.create(name: "Darrick Yong", password: "123456", email: "darrickyong@earmark.com")
User.create(name: "John Doe", password: "123456", email: "johndoe@earmark.com")
User.create(name: "Jane Doe", password: "123456", email: "janedoe@earmark.com")
User.create(name: "Harry Potter", password: "123456", email: "harrypotter@earmark.com")
User.create(name: "JSON Wong", password: "123456", email: "jsonwong@earmark.com")
User.create(name: "Poofey Yong", password: "123456", email: "poofeyyong@earmark.com")

Expense.create(name: "One dinner", amount: 5442, owner_id: 1, date: "2020-04-25")
Expense.create(name: "Two dinner", amount: 2022, owner_id: 1, date: "2020-04-18")
Expense.create(name: "Three dinner", amount: 3099, owner_id: 1, date: "2020-04-08")
Expense.create(name: "Four dinner", amount: 4018, owner_id: 1, date: "2020-04-01")
Expense.create(name: "Five dinner", amount: 5090, owner_id: 1, date: "2020-04-20")
Expense.create(name: "Expense 6", amount: 3698, owner_id: 2, date: "2020-05-04")
Expense.create(name: "Expense 7", amount: 1234, owner_id: 2, date: "2020-03-29")
Expense.create(name: "Expense 8", amount: 98760, owner_id: 2, date: "2019-04-29")
Expense.create(name: "Expense 9", amount: 9420, owner_id: 5, date: "2018-04-29")

Transaction.create(amount: 2721, payer_id: 2, expense_id: 1)
Transaction.create(amount: 1011, payer_id: 2, expense_id: 2)
Transaction.create(amount: 1550, payer_id: 3, expense_id: 3)
Transaction.create(amount: 2009, payer_id: 2, expense_id: 4)
Transaction.create(amount: 2545, payer_id: 2, expense_id: 5)
Transaction.create(amount: 1849, payer_id: 4, expense_id: 6)
Transaction.create(amount: 617, payer_id: 1, expense_id: 7)
Transaction.create(amount: 19752, payer_id: 1, expense_id: 8)
Transaction.create(amount: 19752, payer_id: 3, expense_id: 8)
Transaction.create(amount: 19752, payer_id: 4, expense_id: 8)
Transaction.create(amount: 19752, payer_id: 5, expense_id: 8)
Transaction.create(amount: 4710, payer_id: 1, expense_id: 9)

Friendship.create(user_id: 1, friend_id: 7)
Friendship.create(user_id: 1, friend_id: 6)
Friendship.create(user_id: 1, friend_id: 5)
Friendship.create(user_id: 1, friend_id: 4)
Friendship.create(user_id: 3, friend_id: 1)
Friendship.create(user_id: 2, friend_id: 1)

Payment.create(amount: 1003, payee_id: 1, payer_id: 2, date: "2020-04-19")
Payment.create(amount: 1515, payee_id: 1, payer_id: 3, date: "2020-03-18")
Payment.create(amount: 2020, payee_id: 1, payer_id: 4, date: "2019-12-01")
Payment.create(amount: 199, payee_id: 5, payer_id: 1, date: "2019-04-18")
Payment.create(amount: 12345, payee_id: 6, payer_id: 1, date: "2018-04-01")