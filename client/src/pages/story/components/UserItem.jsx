import PropTypes from 'prop-types';
import { NO_AVARTAR, PF } from '../../../constants';

UserItem.propTypes = {
  changeStoryView: PropTypes.func,
};

function UserItem(props) {
  const { followingUser, storyAuthor, changeStoryView = null } = props;

  const changeStoryViewerHandler = (user) => {
    if (changeStoryView) changeStoryView(user);
  };

  return (
    <li
      key={followingUser._id}
      className={
        storyAuthor._id === followingUser._id ? 'storyUser active' : 'storyUser'
      }
      onClick={() => changeStoryViewerHandler(followingUser)}
    >
      <div className='storyUserInfo'>
        <div className=''>
          <img
            src={`${PF}/${
              followingUser.avatar
                ? `person/${followingUser.avatar}`
                : NO_AVARTAR
            }`}
            alt=''
            className='storyUserInfoAvatar'
          />
        </div>
        <div className='storyUserInfoText'>
          <div className='storyUserInfoTextUsername'>{`${followingUser.firstName} ${followingUser.lastName}`}</div>
          <div className='storyUserInfoTextTime'>7 phút</div>
        </div>
      </div>
    </li>
  );
}

export default UserItem;
