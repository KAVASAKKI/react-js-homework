import PropsTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.statsLabel}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsLabel}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsLabel}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.PropsTypes = {
  username: PropsTypes.string,
  tag: PropsTypes.string,
  location: PropsTypes.string,
  avatar: PropsTypes.string,
  stats: PropsTypes.shape({
    followers: PropsTypes.number,
    views: PropsTypes.number,
    likes: PropsTypes.number,
  }),
};
