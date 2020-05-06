json.extract! friendship, :id, :user_id, :friend_id

if current_user.id == friendship.user_id
  json.set! :name, friendship.friend.name
  json.set! :friendUserId, friendship.friend.id
else
  json.set! :name, friendship.user.name
  json.set! :friendUserId, friendship.user.id
end