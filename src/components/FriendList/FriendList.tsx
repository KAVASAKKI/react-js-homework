import { IFriend } from 'types/types';
import FriendListItem from './FriendListItem';

interface IProps {
  friends: IFriend[];
}

export default function FriendList({ friends }: IProps) {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
