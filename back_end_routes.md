## **HTML**
+ `GET/` `StaticPagesController#root`

## **API Endpoints**

**`users`**
+ `GET /api/users`
+ `POST /api/users` - sign up

**`expenses`**
+ `GET /api/expenses` - retrieves expenses filtered by currentUser
+ `GET /api/expense/:id` - returns an expense
+ `POST /api/expenses` - creates new expense
+ `PATCH /api/expenses/:id` - edits an expense
+ `DELETE /api/expenses/:id` - deletes an expense

**`transactions`**
+ `GET /api/transactions` - retrieves transactions filtered by currentUser
+ `GET /api/transactions/:id` - returns a transaction
+ `POST /api/transactions` - creates new transaction
+ `PATCH /api/transactions/:id` - edits a transaction
+ `DELETE /api/transactions/:id` - deletes a transaction

**`payments`**
+ `GET /api/payments` - retrieves payments filtered by currentUser
+ `GET /api/payments/:id` - returns a payment
+ `POST /api/payments` - creates new payment
+ `PATCH /api/payments/:id` - edits a payment
+ `DELETE /api/payments/:id` - deletes a payment

**`comments`**
+ `GET /api/comments` - retrieves comments filtered by currentUser
+ `GET /api/comments/:id` - returns a comment
+ `POST /api/comments` - creates new comment
+ `PATCH /api/comments/:id` - edits a comment
+ `DELETE /api/comments/:id` - deletes a comment

**`groups`**
+ `GET /api/groups` - retrieves groups filtered by currentUser
+ `GET /api/groups/:id` - returns a group
+ `POST /api/groups` - creates new group
+ `PATCH /api/groups/:id` - edits a group
+ `DELETE /api/groups/:id` - deletes a group

**`friendships`**
+ `GET /api/friendships` - retrieves friendships filtered by currentUser