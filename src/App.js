import Profile from 'components/Profile/Profile.js';
import Statistics from 'components/Statistics/Statistics';
import user from './data/user.json';
import stats from './data/data.json';

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
    </>
  );
}
