export const fetchFriendships = () => (
  $.ajax({
    url: "/api/friendships"
  })
)

export const fetchFriendship = friendshipId => (
  $.ajax({
    url: `/api/friendships/${friendshipId}`
  })
)

export const createFriendship = email => (
  $.ajax({
    url: "/api/friendships",
    method: "POST"
  })
)

export const deleteFriendship = friendshipId => (
  $.ajax({
    url: `/api/friendships/${friendshipId}`,
    method: "DELETE"
  })
)