import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchFriendships();
  }

  render() {
    const { friendships, currentUser } = this.props;
    const pos = [];
    const neg = [];
    let owed = 0;
    let owe = 0;
    friendships.forEach( friendship => {
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
      <div className="dashboard">
        <div className="dashboard-totals">

          <div className="dashboard-total">
            <div>
              total balance
            </div>
            {(total > 0) ? 
              <div className="dashboard-total-pos">
                {`+ $${Math.abs(total).toFixed(2)}`}
              </div>
              :
              <div className="dashboard-total-neg">
                {`- $${Math.abs(total).toFixed(2)}`} 
              </div>
            }
          </div>

          <div className="dashboard-total-owe">
            <div>
              you owe
            </div>
            <div className="dashboard-total-neg">
              ${owe}
            </div>
          </div>
          
          <div className="dashboard-total-owed">
            <div>
              you are owed
            </div>
            <div className="dashboard-total-pos">
              ${owed}
            </div>
          </div>

        </div>

        <div className="dashboard-summary">
          <div className="dashboard-neg">
            <div className="dashboard-neg-header">
              You owe
            </div>
            {neg.map( (friendship, idx) => {
              return (
                <div 
                  className="dashboard-owe-item"
                  key={idx}>
                  <div className="dashboard-owe-icon">
                    <FontAwesomeIcon icon={faCoins}/>
                  </div>
                  <div className="dashboard-owe-main">
                    <div className="dashboard-owe-name">
                      {Object.keys(friendship)[0]}
                    </div>
                    <div className="dashboard-owe-balance">
                      <div>
                        you owe
                      </div>
                      <div className="dashboard-owe-amount">
                        ${(Object.values(friendship)[0])/100}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="dashboard-pos">
            <div className="dashboard-pos-header">
              You are owed
            </div>
            {pos.map( (friendship, idx) => {
              return (
                <div 
                  className="dashboard-owed-item"
                  key={idx}>
                  <div className="dashboard-owed-icon">
                    <FontAwesomeIcon icon={faCoins}/>
                  </div>
                  <div className="dashboard-owed-main">
                    <div className="dashboard-owed-name">
                      {Object.keys(friendship)[0]}
                    </div>
                    <div className="dashboard-owed-balance">
                      <div>
                        owes you
                      </div>
                      <div className="dashboard-owed-amount">
                        ${(Object.values(friendship)[0])/100}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;