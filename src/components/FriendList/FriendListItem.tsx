import s from '../FriendList/FriendList.module.css';

interface IProps {
  avatar: string;
  name: string;
  isOnline: boolean;
}

export default function FriendListItem({ avatar, name, isOnline }: IProps) {
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
