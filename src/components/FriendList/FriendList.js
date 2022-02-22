import PropsTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
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

FriendList.PropsTypes = {
  friends: PropsTypes.arrayOf({
    id: PropsTypes.number.isRequired,
    avatar: PropsTypes.string.isRequired,
    name: PropsTypes.string.isRequired,
    isOnline: PropsTypes.bool.isRequired,
  }),
};
