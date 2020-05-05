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

export const selectAllPayments = (state) => {
  const payments = [];
  if (Object.values(state.entities.payments).length === 0) {
    return payments;
  } else {
    let payment;
    // debugger
    Object.values(state.entities.payments).forEach( payment => {
      const revisedPayment = Object.assign({}, payment, 
        { "payeeName": state.entities.users[payment.payee_id].name },
        { "payerName": state.entities.users[payment.payer_id].name });

      payments.push(revisedPayment);
    })
    return payments;
  }
}