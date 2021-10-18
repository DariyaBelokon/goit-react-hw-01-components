import PropTypes from 'prop-types';
import FriendItem from './friendItem';
import s from './friends.module.css';
export default function Friends({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => {
        const { name, avatar, isOnline, id } = friend;

        return (
          <li key={id} className={s.item}>
            <FriendItem name={name} avatar={avatar} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
  id: PropTypes.number,
};
