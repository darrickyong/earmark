export const selectAllFriends = (state) => {
  
  const currentUserId = state.session.id;
  const friends = [];
  if (Object.values(state.entities.friendships).length === 0) {
    return friends;
  } else {
    let friend;
    Object.values(state.entities.friendships).forEach( friendship => {
      if (currentUserId === friendship.user_id) {
        friend = Object.assign({}, state.entities.users[friendship.friend_id], {friendship_id: friendship.id});
      } else {
        friend = Object.assign({}, state.entities.users[friendship.user_id], {friendship_id: friendship.id});
      }
      friends.push(friend);
    })
    return friends;

  }
}