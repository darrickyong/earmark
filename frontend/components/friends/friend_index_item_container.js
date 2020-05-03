import {
  connect
} from "react-redux";
import {
  deleteFriendship
} from "../../actions/friendship_actions";
import FriendIndexItem from "./friend_index_item";

const mapStateToProps = (state, ownProps) => ({
  
})

const mapDispatchToProps = dispatch => ({
  deleteFriendship: friendId => dispatch(deleteFriendship(friendId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendIndexItem);