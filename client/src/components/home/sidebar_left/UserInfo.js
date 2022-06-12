import { Link } from 'react-router-dom';
import Avatar from '../../Avatar';

const UserInfo = ({ children, user, border, handleClose, setShowFollowers, setShowFollowing, msg }) => {
  const handleCloseAll = () => {
    if (handleClose) handleClose();
    if (setShowFollowers) setShowFollowers(false);
    if (setShowFollowing) setShowFollowing(false);
  };

  const showMsg = (user) => {
    return (
      <>
        <div>{user.text}</div>
        {user.media.length > 0 && (
          <div>
            {user.media.length} <i className="fas fa-image" />
          </div>
        )}

        {user.call && (
          <span className="material-icons">
            {user.call.times === 0
              ? user.call.video
                ? 'videocam_off'
                : 'phone_disabled'
              : user.call.video
              ? 'video_camera_front'
              : 'call'}
          </span>
        )}
      </>
    );
  };

  return (
    <div className={`d-flex align-items-center justify-content-between w-100 ${border}`}>
      <div>
        <Link
          to={`/profile/${user._id}`}
          onClick={handleCloseAll}
          className="d-flex align-items-center"
          style={{ textDecoration: 'none' }}
        >
          <Avatar src={user.avatar} size="big-avatar" />
          <div style={{ transform: 'translateY(-2px)', marginLeft: '10px' }}>
            <span style={{ fontSize: '1rem', color: '#000', fontWeight: '600' }}>
              {msg ? showMsg(user) : user.fullname}
            </span>

            <small className="d-block" style={{ opacity: 0.8, fontSize: '1rem', color: '#536471' }}>
              @{user.username}
            </small>
          </div>
        </Link>
      </div>

      {children}
    </div>
  );
};

export default UserInfo;
