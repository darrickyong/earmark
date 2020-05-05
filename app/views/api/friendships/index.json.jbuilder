@friendships.each do |friendship|
  json.set! friendship.id do
    json.partial! "/api/friendships/friendship", friendship: friendship
    if current_user.id == friendship.user_id
      json.set! :name, friendship.friend.name
    else
      json.set! :name, friendship.user.name
    end
  end
end