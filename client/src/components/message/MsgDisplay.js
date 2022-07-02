import { useDispatch, useSelector } from 'react-redux';
import { deleteMessages } from '../../redux/actions/messageAction';
import Avatar from '../Avatar';

const MsgDisplay = ({ user, msg, data }) => {
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
      </div>
      <div className="you_content">
        {user._id === auth.user._id && (
          <i className="you_content_detele" onClick={handleDeleteMessages}>
            Thu hồi
          </i>
        )}

        <div>{msg.text && <div className="chat_text">{msg.text}</div>}</div>
      </div>

      <div className="chat_time">{new Date(msg.createdAt).toLocaleString()}</div>
    </>
  );
};

export default MsgDisplay;
