export const selectAllFriends = (state) => {
  
  const currentUserId = state.session.id;
  const friends = [];
  // debugger
  if (Object.values(state.entities.friendships).length === 0) {
    return friends;
  } else {
    Object.values(state.entities.friendships).forEach( friendship => {
      if (currentUserId === friendship.user_id) {
        friends.push(state.entities.users[friendship.friend_id]);
      } else {
        friends.push(state.entities.users[friendship.user_id]);
      }
    })
    return friends;

  }
}