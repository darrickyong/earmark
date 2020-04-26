# Database Schema

## `users`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `username`        | string    | not null, indexed, unique |
| `email`           | string    | not null, indexed, unique |         
| `password_digest` | string    | not null                  |
| `session_token`   | string    | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ index on `username, unique: true`
+ index on `email, unique: true`
+ index on `session_token, unique: true`

## `groups`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `name`            | string    | not null                       |
| `description`     | string    |                                |
| `owner_id`        | integer   | not null, indexed, foreign key |
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ `owner_id` references `users`
+ index on `owner_id`

## `expenses`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `name`               | string    | not null                       |
| `amount`             | integer   | not null                       |
| `owner_id`           | integer   | not null, indexed, foreign key |
| `date`               | date      | not null                       |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `owner_id` references `users`
+ index on `owner_id`

## `transactions`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `amount`             | integer   | not null                       |
| `payer_id`           | integer   | not null, indexed, foreign key |
| `expense_id`         | integer   | not null, indexed, foreign key |
| `date`               | date      | not null                       |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `payer_id` references `users`
+ `expense_id` references `expenses`
+ index on `payer_id`
+ index on `expense_id`

## `payments`
| column name          | data type | details                        |
|:---------------------|:---------:|:-------------------------------|
| `id`                 | integer   | not null, primary key          |
| `amount`             | integer   | not null                       |
| `payee_id`           | integer   | not null, indexed, foreign key |
| `payer_id`           | integer   | not null, indexed, foreign key |
| `date`               | date      | not null                       |
| `created_at`         | datetime  | not null                       |
| `updated_at`         | datetime  | not null                       |

+ `payee_id` references `users`
+ `payer_id` references `users`
+ index on `payee_id`
+ index on `payer_id`

## `comments`
| column name       | data type | details                                    |
|:------------------|:---------:|:-------------------------------------------|
| `id`              | integer   | not null, primary key                      |
| `title`           | string    |                                            |
| `body`            | text      | not null                                   |
| `author_id`       | integer   | not null, indexed, foreign key             |      
| `commentable_type`| string    | not null, polymorphic table                |
| `commentable_id`  | integer   | not null, indexed, polymorphic foreign key |
| `created_at`      | datetime  | not null                                   |
| `updated_at`      | datetime  | not null                                   |

+ `author_id` references `users`
+ `commentable_type` references `expenses` or `transactions`
+ index on `author_id`
+ index on `commentable_id`

# Joins Tables

## `friendships`
| column name       | data type | details                        |
|:------------------|:---------:|:-------------------------------|
| `id`              | integer   | not null, primary key          |
| `user_id`         | integer   | not null, indexed, foreign key |
| `friend_id`       | integer   | not null, indexed, foreign key |             
| `created_at`      | datetime  | not null                       |
| `updated_at`      | datetime  | not null                       |

+ `user_id` references `users`  
+ `friend_id` references `users`
+ index on `[:user_id, :friend_id], unique: true`

## `members`
| column name       | data type | details                   |
|:------------------|:---------:|:--------------------------|
| `id`              | integer   | not null, primary key     |
| `user_id`         | integer   | not null, indexed         |
| `group_id`        | integer   | not null, indexed         |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

+ `user_id` references `users`
+ `group_id` references `groups`
+ index on `user_id`
+ index on `group_id`