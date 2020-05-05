json.extract! friendship, :id, :user_id, :friend_id

if current_user.id == friendship.user_id
  json.set! :name, friendship.friend.name
else
  json.set! :name, friendship.user.name
end