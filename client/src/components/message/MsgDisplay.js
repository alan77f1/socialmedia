import { useDispatch, useSelector } from 'react-redux';
import { deleteMessages } from '../../redux/actions/messageAction';
import { imageShow, videoShow } from '../../utils/mediaShow';
import Avatar from '../Avatar';
import Times from './Times';

const MsgDisplay = ({ user, msg, theme, data }) => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDeleteMessages = () => {
    if (!data) return;

    if (window.confirm('Bạn có muốn thu hồi tin nhắn này không?')) {
      dispatch(deleteMessages({ msg, data, auth }));
    }
  };

  return (
    <>
      <div className="chat_title">
        <Avatar src={user.avatar} size="small-avatar" />
        <span>{user.username}</span>
      </div>

      <div className="you_content">
        {user._id === auth.user._id && (
          <i className="you_content_detele" onClick={handleDeleteMessages}>
            Thu hồi tin nhắn
          </i>
        )}

        <div>
          {msg.text && (
            <div className="chat_text" style={{ filter: theme ? 'invert(1)' : 'invert(0)' }}>
              {msg.text}
            </div>
          )}
          {msg.media.map((item, index) => (
            <div key={index}>{item.url.match(/video/i) ? videoShow(item.url, theme) : imageShow(item.url, theme)}</div>
          ))}
        </div>
      </div>

      <div className="chat_time">{new Date(msg.createdAt).toLocaleString()}</div>
    </>
  );
};

export default MsgDisplay;
