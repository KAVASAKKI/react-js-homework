import Profile from 'components/Profile/Profile.js';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionsHistory from 'components/TransactionsHistory/TransactionsHistory';
import user from './data/user.json';
import stats from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <>
      <div className="container">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>

      <div className="container">
        <Statistics items={stats} />
      </div>

      <div className="container">
        <FriendList friends={friends} />
      </div>

      <div className="container">
        <TransactionsHistory items={transactions} />
      </div>
    </>
  );
}
