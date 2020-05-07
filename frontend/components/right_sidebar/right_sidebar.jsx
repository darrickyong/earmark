import React from "react";

class RightSidebar extends React.Component {
  render() {
    const { friendships, currentUser } = this.props;
    const pos = [];
    const neg = [];
    let owed = 0;
    let owe = 0;
    friendships.forEach(friendship => {
      const { name, amount } = friendship;
      if (!amount) return;
      if (
        (friendship.user_id === currentUser.id && friendship.amount > 0) ||
        (friendship.friend_id === currentUser.id && friendship.amount < 0)
      ) {
        pos.push({ [name]: Math.abs(amount) });
        owed += Math.abs(amount);
      } else {
        neg.push({ [name]: Math.abs(amount) });
        owe += Math.abs(amount);
      }
    })
    owed = owed / 100;
    owe = owe / 100;
    const total = owed - owe

    return (
      <div className="right-sidebar">
        <div className="right-sidebar-container">
          <h2 className="right-sidebar-total">
            Your total balance
          </h2>
          {total > 0 ? 
            <div className="right-sidebar-pos">
              <div>
                you are owed
              </div>
              <div className="right-sidebar-posval">
                {Math.abs(total).toFixed(2)}
              </div>
            </div> :
            <div className="right-sidebar-neg">
              <div>
                you owe
              </div>
              <div className="right-sidebar-negval">
                {Math.abs(total).toFixed(2)}
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default RightSidebar;