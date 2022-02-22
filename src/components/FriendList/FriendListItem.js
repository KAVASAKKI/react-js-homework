import PropsTypes from 'prop-types';
import s from '../FriendList/FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span
        className={`${s.status} ${isOnline ? s.isOnline : s.isOffline}`}
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="60" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.PropsTypes = {
  avatar: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  isOnline: PropsTypes.bool.isRequired,
};
